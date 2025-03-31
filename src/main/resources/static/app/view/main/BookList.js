Ext.define('MyApp.view.main.BookList', {
  extend: 'Ext.grid.Panel',
  xtype: 'booklist',

  store: {
    storeId: 'books',
    autoLoad: true,
    fields: ['id', 'title', 'author', 'publisher'],
    proxy: {
      type: 'ajax',
      url: 'http://localhost:8080/api/books', // Spring Boot API
      reader: {
        type: 'json'
      }
    }
  },

  columns: [
    { text: 'ID', dataIndex: 'id', width: 50 },
    { text: '제목', dataIndex: 'title', width:400 },
    { text: '저자', dataIndex: 'author' , width:200},
    { text: '출판사', dataIndex: 'publisher', width:200 }
  ],

  tbar: [
    {
      text: '도서 등록',
      handler: function () {
        Ext.create('MyApp.view.main.BookForm').show();
      }
    },
    {
      text: '도서 수정',
      handler: function (btn) {
        const rec = btn.up('grid').getSelection()[0];
        if (rec) {
          const win = Ext.create('MyApp.view.main.BookForm');
          win.down('form').loadRecord(rec);
          win.show();
        }
      }
    },
    {
      text: '도서 삭제',
      handler: function (btn) {
        const grid = btn.up('grid');
        const rec = grid.getSelection()[0];
        if (!rec) {
          Ext.Msg.alert('알림', '삭제할 도서를 선택하세요!');
          return;
        }

        Ext.Msg.confirm('확인',`'${rec.get('title')}' 도서를 삭제하시겠습니까?`, function (choice) {
          if (choice === 'yes') {
            Ext.Ajax.request({
              url: 'http://localhost:8080/api/books/' + rec.get('id'),
              method: 'DELETE',
              success: function () {
                Ext.Msg.alert('완료', '도서가 삭제되었습니다.');
                grid.getStore().reload();
              },
              failure: function () {
                Ext.Msg.alert('오류', '삭제 중 오류가 발생했습니다.');
              }
            });
          }
        });

      }
    }
  ],

  selModel: 'rowmodel'
});
