onload = function(){
  if (bowser.msie && bowser.version <= 9 || bowser.c && !bowser.msie) {
    var hbDiv = document.createElement('div');
    hbDiv.className = 'hbMarkup';
    hbDiv.setAttribute('id', 'hbMUWrap');
    if (bowser.msie && bowser.version <= 9) {
      hbDiv.innerHTML = '<div class="hb-wrap clearfix">'+
                        '<div class="hb-text clearfix">'+
                          '<img src="/assets/happybrowser/img/warning.jpg" alt="warning" /> '+
                          '<p>We\'ve detected that you have an outdated browser. This site may not work as expected. <strong>Please consider upgrading your browser.</strong></p>'+
                        '</div>'+
                        '<div class="hb-upgrade clearfix">'+
                          '<div class="hb-img-wrap hb-dismiss" id="dismiss">X</div>'+
                          '<div class="hb-img-wrap hb-chrome">'+
                            '<a href="http://www.google.com/chrome/" >'+
                              '<img src="/assets/happybrowser/img/chrome.jpg" alt="upgrade chrome"/>'+
                              '</a>'+
                          '</div>'+
                          '<div class="hb-img-wrap hb-ff">'+
                            '<a href="https://www.mozilla.org/en-US/firefox/new/?utm_source=firefox-com&utm_medium=referral" >'+
                            '<img src="/assets/happybrowser/img/ff.jpg" alt="upgrade firefox"/>'+
                            '</a>'+
                          '</div>'+
                          '<div class="hb-img-wrap hb-ie">'+
                            '<a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" >'+
                            '<img src="/assets/happybrowser/img/ie.jpg" alt="upgrade internet explorer"/>'+
                            '</a>'+
                          '</div>'+
                        '</div>'+
                      '</div>'
      ;
    }else if(bowser.c && !bowser.msie){
      hbDiv.innerHTML = '<div class="hb-wrap clearfix">'+
                          '<div class="hb-text clearfix">'+
                            '<img src="/assets/happybrowser/img/warning.jpg" alt="warning" />'+
                            '<p>We\'ve detected that you have an outdated browser. This site may not work as expected. <strong>Please consider upgrading your browser.</strong></p>'+
                          '</div>'+
                          '<div class="hb-upgrade clearfix">'+
                            '<div class="hb-img-wrap hb-dismiss" id="dismiss">X</div>'+
                            '<div class="hb-img-wrap hb-chrome">'+
                              '<a href="http://www.google.com/chrome/" >'+
                                '<img src="/assets/happybrowser/img/chrome.jpg" alt="upgrade chrome"/>'+
                              '</a>'+
                            '</div>'+
                           ' <div class="hb-img-wrap hb-ff">'+
                              '<a href="https://www.mozilla.org/en-US/firefox/new/?utm_source=firefox-com&utm_medium=referral" >'+
                                '<img src="/assets/happybrowser/img/ff.jpg" alt="upgrade firefox"/>'+
                              '</a>'+
                            '</div>'+
                          '</div>'+
                        '</div>'
      ;
    }
    var bodyTag = document.body;
    bodyTag.appendChild(hbDiv);
    var dismiss = document.getElementById('dismiss');
    var elem = document.getElementById("hbMUWrap");
    dismiss.onclick = function() { 
        elem.parentNode.removeChild(elem);
    }
  }
};