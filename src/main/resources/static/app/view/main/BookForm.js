Ext.define('MyApp.view.main.BookForm', {
  extend: 'Ext.window.Window',
  xtype: 'bookform',
  title: '도서 등록/수정',
  modal: true,
  width: 400,
  layout: 'fit',
  items: [{
    xtype: 'form',
    bodyPadding: 10,
    defaults: { anchor: '100%', allowBlank: false },
    items: [
      { xtype: 'hiddenfield', name: 'id' },
      { xtype: 'textfield', name: 'title', fieldLabel: '제목' },
      { xtype: 'textfield', name: 'author', fieldLabel: '저자' },
      { xtype: 'textfield', name: 'publisher', fieldLabel: '출판사' }
    ]
  }],
  buttons: [
    {
      text: '저장',
      handler: function (btn) {
        const win = btn.up('window');
        const form = win.down('form');
        const values = form.getValues();
        console.log(values);
        const method = values.id ? 'PUT' : 'POST';
        const url = values.id ? 'http://localhost:8080/api/books/' + values.id : 'http://localhost:8080/api/books';
        Ext.Ajax.request({
          url, method, jsonData: values,
          success: function () {
            Ext.getStore('books').reload();
            win.close();
          }
        });
      }
    },
    {
      text: '취소',
      handler: btn => btn.up('window').close()
    }
  ]
});