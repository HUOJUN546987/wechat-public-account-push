/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfdbee25197a93c59',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '476d279eeb9bd3bc817c3285d9efb4ac',

  PROVINCE: '安徽',
  CITY: '蚌埠',

  USERS: [
    {
      // 想要发送的人的名字
      name: '哼唧唧',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGFL36PcI4kA8ffKrPI1js-1RVLk','oGFL36Hmr_FuJrPURd_oRdaKj670'
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RacCCzr8t3dc5VhDHx1Mumn1vuY67pIdMcQE7KCbLuM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-19',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哼唧唧', year: '2004', date: '01-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-23' },
        // 在一起的日子
        { keyword: 'marry_day', date: '2023-07-09' },
      ],
    },
  ],

}

module.exports = USER_CONFIG

