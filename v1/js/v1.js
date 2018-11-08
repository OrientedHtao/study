(function() {
    var strMenuKey = "memMenuTitle", eleLeftMenuTit = $$("." + strMenuKey);
    
    //存储垂直菜单的展开收起信息
    var funStoreDisplay = function() {
        var arrDisplay = [];
        eleLeftMenuTit.each(function(title, index) {
            arrDisplay[index] = title.retrieve("display") === false? 0: 1;  
        }); 
        
        //存储，IE6~7 cookie 其他浏览器HTML5本地存储
        if (window.localStorage) {
            localStorage.setItem(strMenuKey, arrDisplay);   
        } else {
            Cookie.write(strMenuKey, arrDisplay);   
        }
    };
    
    //默认存储与事件绑定
    eleLeftMenuTit.store("display", true).addEvent("click", function() {
        var eleTarget = $(this.getProperty("data-rel"));
        if (eleTarget) {
            if (this.retrieve("display")) {
                eleTarget.setStyles({
                    position: "absolute",
                    left: "-9999em" 
                });
                this.setProperty("title", "展开").getElement(".u").removeClass("u29").addClass("u39");
                this.store("display", false);
            } else {
                eleTarget.setStyle("position", "static");
                this.setProperty("title", "收起").getElement(".u").removeClass("u39").addClass("u29");
                this.store("display", true);
            }
            //存储
            funStoreDisplay();
        }
        return false;
    });
    
    //检测触发是否收起
    var strStoreDate = window.localStorage? localStorage.getItem(strMenuKey): Cookie.read(strMenuKey);  
    if (strStoreDate) {
        strStoreDate.split(",").each(function(display, index) {
            if (display.toInt() === 0) {
                eleLeftMenuTit[index].fireEvent("click");
            }
        }); 
    }
})();
</script>
<div id="ad">
    <script type="text/javascript"> google_ad_client = "pub-0090627341039040";google_ad_slot = "2041257798";google_ad_width = 468;google_ad_height = 60;</script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-11205167-1']);
      _gaq.push(['_trackPageview']);
    
      (function() {
        var ga = document.createElement('script');
         ga.type = 'text/javascript';
         ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();