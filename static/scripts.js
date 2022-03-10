// Wrap code in IIFE to avoid polluting global namespace
(function(){
    function initMenus(){
        var menu=document.querySelectorAll('.menu-selector');

        for(var i=0;i<menu.length;i++) {
            menu[i].addEventListener('click',function(ev){
                if(ev.target) {
                    var val= ev.target.getAttribute('data-val');
                    if(val){
                        var parent=ev.target.closest('.menu-selector-parent');
                        if(parent){
                            parent.setAttribute('data-show',val);
                        }
                    }

                    var targetMenu = ev.target.closest('.menu-selector');
                    if(targetMenu) {
                        targetMenu.classList.toggle('menu-selector--open');
                    }
                }
            });
        }
    }
    
    function pageInit(){
        initMenus();
    }
    
    if (document.readyState==='complete'||document.readyState==='loaded'||document.readyState==='interactive') {
        pageInit();
    }else{
        window.addEventListener('DOMContentLoaded',function(ev){
            pageInit();
        });
    }
})();
