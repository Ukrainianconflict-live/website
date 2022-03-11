// Wrap code in IIFE to avoid polluting global namespace
(function(){
    function initTabs(){
        var menu=document.querySelectorAll('.tab-menu');

        for(var i=0;i<menu.length;i++) {
            menu[i].addEventListener('click',function(ev){
                if(ev.target) {
                    var val= ev.target.getAttribute('data-val');
                    if(val){
                        var parent=ev.target.closest('.tab-menu-parent');
                        if(parent){
                            parent.setAttribute('data-show',val);
                        }
                    }
                }
            });
        }
    }
    
    function pageInit(){
        initTabs();
    }
    
    if (document.readyState==='complete'||document.readyState==='loaded'||document.readyState==='interactive') {
        pageInit();
    }else{
        window.addEventListener('DOMContentLoaded',function(ev){
            pageInit();
        });
    }
})();
