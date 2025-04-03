Ext.application({
    name: 'GoldWings',
  
    launch: function () {
      Ext.create('Ext.container.Viewport', {
        layout: {
          type: 'vbox',
          align: 'center',
          pack: 'center'
        },
        style: {
          background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)'
        },
        items: [
          {
            xtype: 'panel',
            width: 350,
            bodyPadding: 30,
            layout: 'anchor',
            title: '<div style="text-align:center;font-size:20px;">📦 GoldWings 로그인</div>',
            style: {
              backgroundColor: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              borderRadius: '2px'
            },
            items: [
              {
                xtype: 'textfield',
                name: 'username',
                emptyText: '아이디',
                anchor: '100%',
                height: 40,
                allowBlank: false,
                cls: 'modern-login-field'
              },
              {
                xtype: 'textfield',
                name: 'password',
                emptyText: '비밀번호',
                anchor: '100%',
                height: 40,
                inputType: 'password',
                allowBlank: false,
                cls: 'modern-login-field',
                margin: '10 0'
              },
              {
                xtype: 'button',
                text: '로그인',
                scale: 'medium',
                style: {
                  backgroundColor: '#1e88e5',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  height: '40px'
                },
                anchor: '100%',
                handler: function (btn) {
                  const panel = btn.up('panel');
                  const username = panel.down('[name=username]').getValue();
                  const password = panel.down('[name=password]').getValue();
  
                  if (username === 'admin' && password === '1234') {
                    panel.up('viewport').destroy();
  
                    // 로그인 성공 시 main 메뉴 로드
                    const script = document.createElement('script');
                    script.src = '/app_menu.js';
                    document.body.appendChild(script);
                  } else {
                    Ext.Msg.alert('오류', '아이디 또는 비밀번호가 잘못되었습니다.');
                  }
                }
              }
            ]
          }
        ]
      });
    }
  });
  