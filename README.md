# sms
手机验证码输入组件，支持requirejs

## 用法如下
   ```javascript
   sms = new Sms({
            title: '请输入短信验证码',
            subtitle: '第二次投诉横坑村嘉湖山庄横西一路，横西二楼施工进度太慢',
            text: '*验证码已发送到手机尾号',
            time: 10,
            defaultSend:true,
            sendMsg: function() {
                console.log("发送了验证码，请注意查收")
            },
            callback: function(value) {
                console.log("回调函数" + value)
            }
        })
        sms.show()
   ```
