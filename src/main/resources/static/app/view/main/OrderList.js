Ext.define('MyApp.view.main.OrderList', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderlist',
  
    title: '🧾 주문 관리',
  
    store: {
      fields: ['orderId', 'bookTitle', 'quantity', 'status'],
      data: []
    },
  
    columns: [
      { text: '주문번호', dataIndex: 'orderId', flex: 1 },
      { text: '도서명', dataIndex: 'bookTitle', flex: 2 },
      { text: '수량', dataIndex: 'quantity', flex: 1 },
      { text: '상태', dataIndex: 'status', flex: 1 }
    ]
  });