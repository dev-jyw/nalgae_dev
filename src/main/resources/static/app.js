
Ext.application({
  name: 'MyApp',
  requires: [
    'MyApp.view.main.Main',
    'MyApp.store.Books',
    'MyApp.store.Inout',
    'MyApp.model.Book',
    'MyApp.model.Inout'
  ],
  launch: function () {
    Ext.create('MyApp.view.main.Main', { renderTo: Ext.getBody() });
  }
});
