Ext.define('GoldWings.view.main.Menu', {
  extend: 'Ext.container.Viewport',
  layout: 'border',

  items: [
    {
      region: 'west',
      xtype: 'treepanel',
      title: '메뉴',
      width: 250,
      split: true,
      collapsible: false,
      rootVisible: false,
      itemId: 'menuTree',
      store: {
        type: 'tree',
        root: {
          expanded: true,
          children: []
        }
      }
    },
    {
      region: 'center',
      xtype: 'tabpanel',
      itemId: 'mainTabPanel',
      items: []
    }
  ],

  listeners: {
    afterrender: function () {
      const tabPanel = this.down('#mainTabPanel');
      const tree = this.down('#menuTree');

      // 탭 메뉴 불러오기 (Level 1)
      Ext.Ajax.request({
        url: '/api/menu/tab',
        success: function (response) {
          const menus = Ext.decode(response.responseText);

          menus.forEach(function (menu) {
            tabPanel.add({
              title: menu.menuNm,
              itemId: menu.menuId,
              closable: false,
              listeners: {
                activate: function () {
                  // 탭 클릭 → Level 2 메뉴 가져오기
                  Ext.Ajax.request({
                    url: `/api/menu/sub/${menu.menuId}`, // Level 2
                    success: function (res) {
                      const subMenus = Ext.decode(res.responseText);
                      const level2Menus = subMenus.filter(m => m.menuLevel === 2);

                      const treeRoot = {
                        expanded: true,
                        children: []
                      };

                      let loadedCount = 0;

                      if (level2Menus.length === 0) {
                        tree.setRootNode(treeRoot);
                        return;
                      }

                      level2Menus.forEach(function (level2) {
                        // Level 3 메뉴 가져오기
                        Ext.Ajax.request({
                          url: `/api/menu/sub/${level2.menuId}`, // Level 3
                          success: function (res3) {
                            const level3Menus = Ext.decode(res3.responseText)
                              .filter(m => m.menuLevel === 3 && m.parentMenuId === level2.menuId);

                            const children = level3Menus.map(child => ({
                              text: child.menuNm,
                              id: child.menuId,
                              leaf: true
                            }));

                            treeRoot.children.push({
                              text: level2.menuNm,
                              id: level2.menuId,
                              expanded: true,
                              children: children
                            });

                            loadedCount++;
                            if (loadedCount === level2Menus.length) {
                              // 모든 3레벨 메뉴 로딩 후 트리 갱신
                              tree.setRootNode(treeRoot);
                            }
                          }
                        });
                      });
                    }
                  });
                }
              }
            });
          });

          // 첫 번째 탭 자동 활성화
          if (menus.length > 0) {
            tabPanel.setActiveTab(0);
            tabPanel.items.items[0].fireEvent('activate');
          }
        }
      });
    }
  }
});
