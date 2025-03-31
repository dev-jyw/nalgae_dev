Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  requires: [
    'MyApp.view.main.BookList',
    'MyApp.view.main.InoutList',
    'MyApp.view.main.StockList',
    'MyApp.view.main.OrderList',
    'MyApp.view.main.CustomerList',
    'MyApp.view.main.PublisherList',
    'MyApp.view.main.ReportDashboard'
  ],
  items: [
    { xtype: 'booklist', title: '📚 도서 관리' },
    { xtype: 'inoutlist', title: '📦 입출고 관리' },
    { xtype: 'stocklist', title: '📦 재고 현황' },
    { xtype: 'orderlist', title: '🧾 주문 관리' },
    { xtype: 'customerlist', title: '👥 거래처 관리' },
    { xtype: 'publisherlist', title: '🏢 출판사 관리' },
    { xtype: 'reportdashboard', title: '📊 리포트 대시보드' }
  ]
});