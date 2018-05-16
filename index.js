(function(global, factory){
    global.Sms = factory()
})(this, function(){

    var html = `<div class="sms-module none">
    <div class="black-bg">
        <div class="input-sms">
            <div class="title-border">
                请输入短信验证码<i><b></b></i>
            </div>
            <div class="sub-title">
                测hi上的覅速度
            </div>
            <div class="line"></div>
            <div class="input-sms-content">
    
                <div class="input-sms-span">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <input type="number" id="number">
            </div>
            <p class="send-sms-number"></p>
            <p class="send-sms-time">
                <span>重新获取</span>
                <span><span id="countdown"></span>秒后可重新发送</span>
            </p>
        </div>
    </div>
</div>`;
    var css = ` html {
        font-size: 48px;
    }
    .sms-module .black-bg {
        width: 7.5rem;
        height: 100%;
        background: rgba(0, 0, 0, .75);
        position: fixed;
        top: 0;
    }

    .sms-module .black-bg .input-sms {
        width: 7.5rem;
        height: 3.94rem;
        position: absolute;
        bottom: 0;
        background: #FFF;
    }

    .sms-module .black-bg .input-sms .title-border {
        line-height: .8rem;
        height: .8rem;
        background-color: #FFF;
        overflow: hidden;
        position: relative;
        font-size: .36rem;
        text-align: center;
    }

    .sms-module .black-bg .input-sms .title-border i {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        margin-top: -.05rem;
    }
    .sms-module .black-bg .input-sms .sub-title {
        height: 0.6rem;
        font-size: .24rem;
        text-align: center;
    }
    .sms-module .black-bg .input-sms .line {
        height: 1px;
        background-color: #efeff4;
    }
    .sms-module .black-bg .input-sms .title-border i b {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-left: 1px solid #333;
        border-bottom: 1px solid #333;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }

    .sms-module .black-bg .input-sms .input-sms-content {
        width: 6.5rem;
        height: 0.8rem;
        margin: 0.5rem auto;
        position: relative;
    }

    .sms-module .black-bg .input-sms .input-sms-span {
        width: 6.5rem;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        top: 0;
    }

    .sms-module .black-bg .input-sms .input-sms-content span {
        height: 0.8rem;
        line-height: 0.8rem;
        border: solid #C8C8C8 1px;
        border-right: none;
        display: block;
        flex: 1;
        text-align: center;
        background-color: #FFFFFF;
    }

    .sms-module .black-bg .input-sms .input-sms-content span:last-of-type {
        border-right: solid #C8C8C8 1px;
    }

    .sms-module .black-bg .input-sms input {
        width: 6.5rem;
        height: 0.8rem;
        border: none;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0);
        color: rgba(0, 0, 255, 0);
        padding-left: 1px;
        letter-spacing:0.9rem;
        caret-color:#2989FE;
    }

    .sms-module .black-bg .input-sms .send-sms-number {
        color: #888;
        font-size: 0.24rem;
        display: inline-block;
        margin-left: 0.5rem;
        height: 0.28rem;
        line-height: 0.28rem;
        float: left;
    }

    .sms-module .black-bg .input-sms .send-sms-time {
        color: #888;
        font-size: 0.24rem;
        display: inline-block;
        float: right;
        height: 0.28rem;
        line-height: 0.28rem;
        margin-right: 0.5rem;
    }
    .none {
        display: none;
    }`;
    appendHTML = function(html) {  
        var divTemp = document.createElement("div"), nodes = null  
            // 文档片段，一次性append，提高性能  
            , fragment = document.createDocumentFragment();  
        divTemp.innerHTML = html;  
        nodes = divTemp.childNodes;  
        for (var i=0, length=nodes.length; i<length; i+=1) {  
           fragment.appendChild(nodes[i].cloneNode(true));  
        }  
        this.appendChild(fragment);  

        nodes = null;  
        fragment = null;  
    };  
    
    //获取dom节点
    var pageBody = document.getElementById('page_body');

    function assign() {
        var target = arguments[0];

        for(var i = 1, obj; obj = arguments[i++];) {
            for(var key in obj) {
                target[key] = obj[key];
            }
        }
        return target;
    }

    //设置默认参数
    defaultInitOpt = {
        title: '请输入短信验证码',
        subtitle: '第二次投诉横坑村嘉湖山庄横西一路，横西二楼施工进度太慢',
        text: '*验证码已发送到手机尾号',
        time: 10,
        defaultSend: false,
        sendMsg: function() {
            console.log("发送了验证码，请注意查收")
        },
        callback: function(value) {
            console.log("回调函数" + value)
        }
    }
    function Sms(obj) {
        smsModule = document.getElementsByClassName("sms-module");
        if(!smsModule.length) {
            //追加html
            appendHTML.call(document.body, html)
            //追加css
            var styleObj = document.createElement('style');
            styleObj.innerHTML = css;
            document.body.appendChild(styleObj);
        }
       //合并参数
       assign(this, defaultInitOpt, obj);

       this.smsModule = document.getElementsByClassName("sms-module")[0];
       
       titleBorder = document.getElementsByClassName('title-border')[0];
       titleBorder.innerHTML = this.title + "<i><b></b></i>";

       this.closeBtn = titleBorder.getElementsByTagName('i')[0];
       this.closeBtn.onclick = function() {
           this.close()
       }.bind(this)
    
       subTitle = document.getElementsByClassName('sub-title')[0];
       if(this.subtitle === '') subTitle.style.display = 'none';
       subTitle.innerHTML = this.subtitle;

       sendSmsNumber = document.getElementsByClassName('send-sms-number')[0];
       sendSmsNumber.innerText = this.text;

       this.number = document.getElementById("number");
       this.spans = document.getElementsByClassName("input-sms-span")[0].getElementsByTagName('span');
       this.countdown = document.getElementById("countdown");
       this.sendSms = document.getElementsByClassName("send-sms-time")[0];
       this.sendSmsSpans = this.sendSms.getElementsByTagName('span');

       //初始化
       this.Init();
    }

    //初始化定时器
    Sms.prototype.initTimer = function() {
        this.countdown.innerText = this.time;
        var time = this.time;
        this.sendSmsSpans[0].style.display = 'none';
        this.sendSmsSpans[1].style.display = 'block';
        
         //初始化定时器
         timer = setInterval(function() {
            if(time < 0) {
                //更改文本为重新获取
                this.sendSmsSpans[0].innerHTML = '重新获取';
                this.sendSmsSpans[0].style.display = 'block';
                this.sendSmsSpans[1].style.display = 'none';
                //清空定时器
                clearInterval(timer)
            }else {
                this.countdown.innerText = time--;
            }
        }.bind(this), 1000);
    }

    Sms.prototype.Init = function() {
        var that = this;
        console.log(this.defaultSend)
        if(this.defaultSend) {
            //默认发送验证码
            this.sendMsg();
            //重新获取默认不可见
            this.sendSmsSpans[0].style.display = 'none';
            //初始化定时器
            this.initTimer();
        }else {
              //把重新发送改成 发送验证码
              this.sendSmsSpans[0].innerHTML = '发送验证码'
              this.sendSmsSpans[1].style.display = 'none';
        }
        
        //初始化重新获取的事件
        this.sendSmsSpans[0].onclick = function(){
            //调事件
            that.sendMsg();
            //重新显示倒计时
            that.initTimer();
            //置空文本框
            that.number.value = '';
            that.number.oninput();
        }

        //初始化键盘输入事件
        that.number.oninput = function () {
            //只能输入数字
            this.value = this.value.replace(/[^\d]/g,'');
            if(this.value.length > 6) {
                this.value = this.value.slice(0, 6);
                return;
            }
            var values = this.value.split("");
    
            for(var i = 0; i < 6; i++) {
                that.spans[i].innerText = values[i] || ''
            }
            //调事件
            if(this.value.length === 6) {
                var value = this.value;
                setTimeout(function(){
                    that.callback(value);
                }.bind(that), 0)
            }
        }
    }
    
    Sms.prototype.show = function() {
        smsClass = this.smsModule.getAttribute('class');
        this.smsModule.setAttribute('class', smsClass.replace('none', ''))
    }

    Sms.prototype.close = function() {
        smsClass = this.smsModule.getAttribute('class');
        this.smsModule.setAttribute('class', smsClass + ' none')        
    }
    //设置默认参数
    Sms.setInitOption = function(option) {
        defaultOption = assign({}, defaultInitOpt, option);
    };
    return Sms;
})