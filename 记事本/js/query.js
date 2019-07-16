!function (win, doc) {
    win.arg=function() {
        var search = window.location.search;
        var a1 = search.substr(1, search.length - 1).split('&');
        var re = [];
        var res = {};
        for( var i = 0; i < a1.length; i++) {
            var index = a1[i].indexOf('=');
            var a = a1[i].substr(0, index) || '';
            var b = a1[i].substr(index + 1, a1[i].length) || '';
            re.push({
                key: a,
                value: b
            });
            if (index < 0) { continue; }
            res[a] = b;
        }
        return {
            Array: re,
            Object: res
        };
    }

   
   win.vm=new Vue({
        el: '#el',   
        data: {   
            price:"",
            serial:"",
            trade_type:win.arg().Object.ps_id==1?"微信":win.arg().Object.ps_id==2?"支付宝":"",
            commodities:"",
            shows:true

        },
        created:function(){
            $('#dimension').hide();
            
            //  this.init()
       
        },
        mounted () { 
            let that=this
            if(win.arg().Object.trade_type&&win.arg().Object.ps_id){
            setTimeout(function(){
                that.init()
            },1000)   
           
        }else{
            alert("获取参数失败")
           
        }
        },
       methods: {
           init:function(){
               let that=this
               var obj = document.getElementById('links');
                      
            axios.post(api.query, {
                "trade_type":win.arg().Object.trade_type,
                "ps_id":win.arg().Object.ps_id
       })
      .then(function (response) {
        if(response.data.code=="SUCCESS"){
        that.shows=false
        vm.price=response.data.rows.trade_fee
        vm.serial=response.data.rows.serial
        vm.commodities=response.data.rows.spsm
        that.$forceUpdate();
        if(response.data.rows.trade_type=="1"){          
            vm.trade_type="微信"
        }else if(response.data.rows.trade_type=="2"){
            vm.trade_type="支付宝"
        }

      
         var qrcode=$('#dimension').qrcode({
          render   : "canvas",
          typeNumber  : -1,
          width: $('#dimension').width(),
          height:  $('#dimension').height(),
          text: response.data.rows.serial
        })
       
      var canvas=qrcode.find('canvas').get(0); $('#imgOne').attr('src',canvas.toDataURL('image/jpg'))
      $('#imgOne').attr('src',canvas.toDataURL('image/jpg'))

   
          }else{
           
            obj.href = "index.html";
            obj.click();
            // window.location="index.html";
          }
       
        console.log(response);
       
     })
     .catch(function (error) {
      console.log(error);
   
      obj.href = "index.html";
      obj.click();
      
    });
           
           

        }
       }
    })
}(window, document);