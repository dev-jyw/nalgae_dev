Ext.define('MyApp.store.Inout', {
  extend: 'Ext.data.Store',
  alias: 'store.inout',
  model: 'MyApp.model.Inout',
  storeId: 'inout',
  autoLoad: false,
  proxy: {
    type: 'ajax',
    url: '/api/inout',
    reader: { type: 'json', rootProperty: 'data' },
    writer: { type: 'json' }
  }
});