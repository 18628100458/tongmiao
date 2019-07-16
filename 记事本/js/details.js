!function (win, doc) {
    // 获取参数
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
    var jsonData =  decodeURIComponent(JSON.stringify(oo));
    var oo=arg().Object.item
    if(!oo){
        return;
    }
  
    // 转换特殊字符
    JSON.parse(decodeURIComponent(
        JSON.stringify(oo).replace(/%5C/g,'%5C%5C')
                            .replace(/%22/g,"%5C%22")
                            .replace(/%2F/g,'%5C%2F')
                            .replace(/%08/g,'%5Cb')
                            .replace(/%0C/g,'%5Cf')
                            .replace(/%0A/g,'%5Cn')
                            .replace(/%0D/g,'%5Cr')
                            .replace(/%09/g,'%5Ct')))

   win.init=function(result){
      
    var listitem={}
    for(let i=0;result.length>i;i++){

        if(result[i].ci_id==JSON.parse(decodeURIComponent(oo))){
       
           listitem=result[i] 
        
           
           break;
        }
    }
    return listitem;

   }         

    win.vm=new Vue({
        el: '#bodyy',   
        data: {   
        list: win.init($.parseJSON(sessionStorage.getItem("list"))),    
        //商品展示
        mag:"",
        num:1,
        flag:true,
        shoes:false,
        arr: [
            {
                id: '1',
                val: '增值税专用发票',
                isOk: false,
               
            },
            {
                id: '2',
                val: '增值税普通发票',
                isOk: false,
               
            },
            {
                id: '3',
                val: '货运运输业增值税专用发票',
                isOk: false,
               
            },
            {
                id: '4',
                val: '机动车销售统一发票',
                isOk: false,
               
            }
        ],
        
      
        },
        created:function(){
           
      
        
        },
        mounted () {    
      
        },
       methods: {
        getnum:function(index){
            if(index){
                this.num++
            }else{
                if(this.num<=1){
                    return;
                }
                this.num--
            }
          },
          getding:function(){
              this.flag=false
          },
         
        }
  
      
             })

}(window, document);