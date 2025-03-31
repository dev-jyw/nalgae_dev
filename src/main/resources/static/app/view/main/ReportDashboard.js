Ext.define('MyApp.view.main.ReportDashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'reportdashboard',
    layout:'hbox',  
    title: '📊 리포트 대시보드',

    items:[
      {
        region: 'west',
        xtype: 'panel',
        title: '리포트 메뉴',
        width: 200,
        collapsible: false,
        bodyPadding: 10,
        defaults: {
          xtype: 'button',
          width: '100%',
          margin: '5 0'
        },
        items: [
          { text: '📅 월별 통계', handler: () => Ext.Msg.alert('리포트', '월별 통계를 불러옵니다.') },
          { text: '📘 도서별 판매순위', handler: () => Ext.Msg.alert('리포트', '도서별 판매순위를 불러옵니다.') },
          { text: '👥 거래처별 매출', handler: () => Ext.Msg.alert('리포트', '거래처별 매출을 불러옵니다.') },
          { text: '📈 입출고 추이', handler: () => Ext.Msg.alert('리포트', '입출고 추이 그래프입니다.') },
          { text: '🧾 종합 리포트', handler: () => Ext.Msg.alert('리포트', '전체 리포트를 요약합니다.') }
        ]
      },
      {
        region: 'center',
        xtype: 'panel',
        html: '<h2>대시보드 영역 (그래프, 통계 등)</h2><p>loremsdfsdfsdfsdfffssssssssssssssss</p><p>loremsdfsdfsdfsdfffssssssssssssssss</p><p>loremsdfsdfsdfsdfffssssssssssssssss</p><p>loremsdfsdfsdfsdfffssssssssssssssss</p><p>loremsdfsdfsdfsdfffssssssssssssssss</p><p>loremsdfsdfsdfsdfffssssssssssssssss</p><p>loremsdfsdfsdfsdfffssssssssssssssss</p>'
      }

    ]
  });