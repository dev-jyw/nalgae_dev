Ext.define('GoldWings.view.wina.WINA1003', {
    extend: 'Ext.panel.Panel',
    xtype: 'wina1003',
    title: '도서 입고 관리',
    layout: 'fit',
  
    items: [
      {
        xtype: 'grid',
        title: '입고 도서 목록',
        store: {
          fields: ['bookId', 'title', 'author', 'quantity'],
          data: [
            { bookId: 'B001', title: '자바의 정석', author: '남궁성', quantity: 10 },
            { bookId: 'B002', title: '스프링 인 액션', author: '크레이그 월즈', quantity: 5 },
            { bookId: 'B003', title: '클린 코드', author: '로버트 마틴', quantity: 7 }
          ]
        },
        columns: [
          { text: '도서 ID', dataIndex: 'bookId', flex: 1 },
          { text: '제목', dataIndex: 'title', flex: 2 },
          { text: '저자', dataIndex: 'author', flex: 2 },
          { text: '수량', dataIndex: 'quantity', flex: 1 }
        ]
      }
    ]
  });
  