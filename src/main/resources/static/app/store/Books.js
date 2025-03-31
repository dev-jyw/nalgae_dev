Ext.define('MyApp.store.Books', {
  extend: 'Ext.data.Store',
  alias: 'store.books',
  model: 'MyApp.model.Book',
  storeId: 'books',
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: '/api/books',
    reader: { type: 'json', rootProperty: 'data' },
    writer: { type: 'json' }
  }
});