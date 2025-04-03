Ext.define('GoldWings.view.main.Menu', {
  extend: 'Ext.container.Viewport',
  layout: 'border',

  items: [
    {
      region: 'north',
      xtype: 'toolbar',
      height: 50,
      style: 'background: linear-gradient(to right, #1565c0, #1e88e5); color: white;',
      padding: '0 10 0 10',
      items: [
        {
          xtype: 'container',
          layout: 'hbox',
          items: [
            {
              xtype: 'image',
              src: '/assets/images/logo.avif',
              width: 32,
              height: 32,
              style: 'margin-right:10px; margin-top: 1px;'
            },
            {
              xtype: 'component',
              html: '<span style="font-size:18px; font-weight:bold;">GoldWings 시스템</span>',
              style: 'color:white; margin-top: 10px;'
            }
          ]
        },
        '->',
        {
          xtype: 'tbtext',
          itemId: 'userName',
          html: '<i class="fas fa-user-circle"></i> 드림날개님',
          style: 'color:white; font-size:14px; margin-right:15px;'
        },
        {
          xtype: 'button',
          iconCls: 'x-fa fa-bell',
          tooltip: '알림',
          style: 'color:white; background:transparent; border:none;',
          handler: function () {
            Ext.Msg.alert('알림', '새로운 알림이 없습니다.');
          }
        },
        {
          xtype: 'button',
          iconCls: 'x-fa fa-sign-out-alt',
          tooltip: '로그아웃',
          style: 'color:white; background:transparent; border:none;',
          handler: function () {
            Ext.Msg.confirm('로그아웃', '로그아웃 하시겠습니까?', function (btn) {
              if (btn === 'yes') {
                // 로그아웃 처리
              }
            });
          }
        }
      ]
    },

    {
      region: 'west',
      xtype: 'treepanel',
      title: '메뉴',
      width: 250,
      split: false,
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
      xtype: 'panel',
      layout: 'border',
      items: [
        {
          region: 'north',
          xtype: 'tabpanel',
          height: 43,
          itemId: 'mainTopTabPanel',
          tabPosition: 'top',
          plain: false,
          border: false,
          bodyBorder: false,
          items: []
        },
        {
          region: 'center',
          xtype: 'panel',
          itemId: 'mainContentPanel',
          html: '<div style="padding:10px;"><p><h2>초기화면</h2></p>여기에 화면 내용이 출력됩니다.</div>'
        },
        {
          region: 'south',
          xtype: 'tabpanel',
          height: 50,
          itemId: 'bottomTabBar',
          tabPosition: 'bottom',
          plain: true,
          border: true,
          bodyBorder: false,
          items: []
        }
      ]
    }
  ],

  listeners: {
    afterrender: function () {
      const tree = this.down('#menuTree');
      const topTabPanel = this.down('#mainTopTabPanel');
      const contentPanel = this.down('#mainContentPanel');
      const bottomTabBar = this.down('#bottomTabBar');

      // 트리 노드 클릭 시
      tree.on('itemclick', function (view, record) {
        if (record.isLeaf()) {
          const menuId = record.getId();
          const menuNm = record.get('text');

          let bottomTab = bottomTabBar.child('#' + menuId);
          if (!bottomTab) {
            bottomTab = bottomTabBar.add({
              title: menuNm,
              itemId: menuId,
              closable: true
            });
          }
          bottomTabBar.setActiveTab(bottomTab);

          contentPanel.update(`
            <div style="padding:10px;">
              <h3>샘플 화면 - ${menuNm} (${menuId})</h3>
              <p>여기에 ${menuNm} 화면의 내용을 추가할 수 있습니다.</p>
            </div>
          `);
        }
      });

      // 상단 탭 (Level 1) 불러오기
      Ext.Ajax.request({
        url: '/api/menu/tab',
        success: function (response) {
          const menus = Ext.decode(response.responseText);

          menus.forEach(function (menu) {
            topTabPanel.add({
              title: menu.menuNm,
              itemId: menu.menuId,
              closable: false,
              listeners: {
                activate: function () {
                  Ext.Ajax.request({
                    url: `/api/menu/sub/${menu.menuId}`,
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
                        Ext.Ajax.request({
                          url: `/api/menu/sub/${level2.menuId}`,
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

          if (menus.length > 0) {
            topTabPanel.setActiveTab(0);
            topTabPanel.items.items[0].fireEvent('activate');
          }
        }
      });
    }
  }
});
