
  function WZtoast(message){
    var tag=document.createElement("div");
    //弹出消息内容
    var content=document.createTextNode(message);
    var tag2=document.createElement("span");
    tag2.appendChild(content);
    tag2.className="WZtoastContent";
    tag.className="WZtoast";
    tag.id="WZtoast";
    tag.appendChild(tag2);
    document.getElementsByTagName('body')[0].appendChild(tag);
    tag.style.opacity=1;
    setTimeout(function(){
      tag.style.opacity=0;
      setTimeout(function(){
        document.getElementsByTagName('body')[0].removeChild(tag);
      },500)
    },500)
    if(document.addEventListener){
      document.getElementById('WZtoast').addEventListener('click',function(){
        document.getElementsByTagName('body')[0].removeChild(tag);
      })
    }
    else{
      document.getElementById('WZtoast').attachEvent('onclick',function(){
        document.getElementsByTagName('body')[0].removeChild(tag);
      })
    }
  }

  function WZmessage(message,confirm){
    var tag=document.createElement("div");
    var tag2=document.createElement("div");
    var tag3=document.createElement("span");
    var tag6=document.createElement("div");
    var content4=document.createTextNode("提示");
    tag6.appendChild(content4);
    tag6.className="WZmessageTips"
    tag2.appendChild(tag6);
    var content=document.createTextNode(message);
    tag3.appendChild(content);//提示的消息
    tag2.appendChild(tag3);
    tag2.appendChild(document.createElement("br"));
    var tag4=document.createElement("span");
    var content2=document.createTextNode("取消");
    tag4.appendChild(content2);
    tag2.appendChild(tag4);
    var content3=document.createTextNode("确定");
    var tag5=document.createElement("span");
    tag5.appendChild(content3);
    tag2.appendChild(tag5);
    tag.appendChild(tag2);
    var marsk=document.createElement('div');
    marsk.className="WZmessageMarsk";
    tag2.className="WZmessageBox";
    tag3.className="WZmessageContent";
    tag.className="WZmessage";
    tag4.className="WZmessageCancel";
    tag5.className="WZmessageConfirm";
    tag4.id="WZmessageCancel";
    tag5.id="WZmessageConfirm";
    document.getElementsByTagName('body')[0].appendChild(marsk);
    document.getElementsByTagName('body')[0].appendChild(tag);
    //
    if(document.addEventListener){
      document.getElementById('WZmessageCancel').addEventListener('click',function(){
        document.getElementsByTagName('body')[0].removeChild(tag);
        document.getElementsByTagName('body')[0].removeChild(marsk);
      })
      document.getElementById('WZmessageConfirm').addEventListener('click',function(){
        document.getElementsByTagName('body')[0].removeChild(tag);
        document.getElementsByTagName('body')[0].removeChild(marsk);
        confirm();
        WZtoast('操作成功');
      })
    }
    else{
      document.getElementById('WZmessageCancel').attachEvent('onclick',function(){
        document.getElementsByTagName('body')[0].removeChild(tag);
        document.getElementsByTagName('body')[0].removeChild(marsk);
      })
      document.getElementById('WZmessageConfirm').attachEvent('onclick',function(){
        document.getElementsByTagName('body')[0].removeChild(marsk);
        document.getElementsByTagName('body')[0].removeChild(tag);
        confirm();
        WZtoast('操作成功');
      })
    }
  } 

  //仅支持ie10及以上
  function WZloading(item){
    if(item=='close'){
      document.getElementsByTagName('body')[0].removeChild(document.getElementById('WZloading'));
      document.getElementsByTagName('body')[0].removeChild(document.getElementById('WZloadingMarsk'));
    }
    else{
      var tag=document.createElement("div");
      var tag2=document.createElement("div");
      var tag3=document.createElement('div');
      tag2.className="WZloadingContent";
      tag.className="WZloading";
      tag.id="WZloading";
      var marsk=document.createElement('div');
      marsk.className="WZloadingMarsk";
      marsk.id="WZloadingMarsk";
      tag.appendChild(tag2);
      document.getElementsByTagName('body')[0].appendChild(marsk);
      document.getElementsByTagName('body')[0].appendChild(tag);
    }
  }

  window.onload=function(){
    var inputRadio=document.getElementsByClassName('WZRadio');
    console.log(inputRadio.length);
    for(var i =0;i<inputRadio.length;i++){
      var tag=document.createElement('label');
      var tag2=document.createElement('div');
      var tag3=document.createElement('div');
      var labelFor="WZRadio"+i
      tag.setAttribute("for",labelFor);

      tag3.className="WZRadioIconDot";
      tag2.appendChild(tag3);
      tag2.className="WZRadioIcon";
      tag.append(tag2);

    }
  }





