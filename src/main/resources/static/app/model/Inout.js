Ext.define('MyApp.model.Inout', {
  extend: 'Ext.data.Model',
  fields: ['id', 'bookId', 'type', 'quantity', { name: 'date', type: 'date' }]
});