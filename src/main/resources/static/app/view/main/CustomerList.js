Ext.define('MyApp.view.main.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',
  
    title: '👥 거래처 관리',
  
    store: {
      fields: ['customerName', 'contact', 'address'],
      data: []
    },
  
    columns: [
      { text: '거래처명', dataIndex: 'customerName', flex: 2 },
      { text: '연락처', dataIndex: 'contact', flex: 1 },
      { text: '주소', dataIndex: 'address', flex: 2 }
    ]
  });