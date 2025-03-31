Ext.define('MyApp.view.main.PublisherList', {
    extend: 'Ext.grid.Panel',
    xtype: 'publisherlist',
  
    title: '🏢 출판사 관리',
  
    store: {
      fields: ['publisherName', 'contact', 'email'],
      data: []
    },
  
    columns: [
      { text: '출판사명', dataIndex: 'publisherName', flex: 2 },
      { text: '연락처', dataIndex: 'contact', flex: 1 },
      { text: '이메일', dataIndex: 'email', flex: 2 }
    ]
  });