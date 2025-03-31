Ext.define('MyApp.view.main.InoutForm', {
  extend: 'Ext.window.Window',
  xtype: 'inoutform',
  title: '입출고 등록',
  modal: true,
  width: 400,
  layout: 'fit',
  items: [{
    xtype: 'form',
    bodyPadding: 10,
    defaults: { anchor: '100%', allowBlank: false },
    items: [
      { xtype: 'numberfield', name: 'bookId', fieldLabel: '도서 ID' },
      { xtype: 'combo', name: 'type', fieldLabel: '타입', store: ['IN', 'OUT'], forceSelection: true },
      { xtype: 'numberfield', name: 'quantity', fieldLabel: '수량', minValue: 1 },
      { xtype: 'datefield', name: 'date', fieldLabel: '날짜', format: 'Y-m-d', value: new Date() }
    ]
  }],
  buttons: [{
    text: '저장',
    handler: function (btn) {
      const win = btn.up('window');
      const form = win.down('form');
      const values = form.getValues();
      Ext.Ajax.request({
        url: '/api/inout',
        method: 'POST',
        jsonData: values,
        success: function () {
          Ext.getStore('inout').reload();
          win.close();
        }
      });
    }
  }]
});