// 1. Loader 설정 (항상 맨 위에서 설정)
Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath('GoldWings', 'app');

// 2. 앱 시작
Ext.application({
  name: 'GoldWings',
  launch: function () {
    Ext.create('GoldWings.view.main.Menu');
  }
});