function loadProgram(menuId) {
    const contentPanel = Ext.ComponentQuery.query('#mainContentPanel')[0];
  
    // 예: WINA1003 → /app/view/wina/wina1003.js
    const lowerId = menuId.toLowerCase();
    const folder = lowerId.substring(0, 4); // wina
    const scriptPath = `/app/view/${folder}/${lowerId}.js`;
  
    // 컴포넌트 이름 예: GoldWings.view.wina.WINA1003
    const className = `GoldWings.view.${folder}.${menuId}`;
  
    // 이미 정의된 경우에는 바로 생성
    if (Ext.ClassManager.isCreated(className)) {
      const cmp = Ext.create(className);
      contentPanel.removeAll();
      contentPanel.add(cmp);
    } else {
      // 동적 로딩
      Ext.Loader.loadScript({
        url: scriptPath,
        onLoad: function () {
          const cmp = Ext.create(className);
          contentPanel.removeAll();
          contentPanel.add(cmp);
        },
        onError: function () {
          contentPanel.update(`
            <div style="padding:10px;">
              <h3>🔒 ${menuId} 컴포넌트를 불러오지 못했습니다.</h3>
              <p>경로 또는 컴포넌트 정의를 확인해주세요.</p>
            </div>
          `);
        }
      });
    }
  }
  