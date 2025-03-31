Ext.define('MyApp.view.main.StockList', {
    extend: 'Ext.grid.Panel',
    xtype: 'stocklist',
  
    title: '📦 재고 현황',
  
    store: {
      fields: ['bookTitle', 'quantity'],
      data: [] // 추후 API 연동 예정
    },
  
    columns: [
      { text: '도서명', dataIndex: 'bookTitle', flex: 2 },
      { text: '재고 수량', dataIndex: 'quantity', flex: 1 }
    ]
  });