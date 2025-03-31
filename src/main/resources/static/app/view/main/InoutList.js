Ext.define('MyApp.view.main.InoutList', {
  extend: 'Ext.grid.Panel',
  xtype: 'inoutlist',
  store: { type: 'inout' },
  columns: [
    { text: 'ID', dataIndex: 'id', width: 50 },
    { text: '도서 ID', dataIndex: 'bookId' },
    { text: '타입', dataIndex: 'type' },
    { text: '수량', dataIndex: 'quantity' },
    { text: '날짜', dataIndex: 'date' }
  ],
  tbar: [{
    text: '입출고 등록',
    handler: () => Ext.create('MyApp.view.main.InoutForm').show()
  }],
  selModel: 'rowmodel'
});