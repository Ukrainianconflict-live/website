// Wrap code in IIFE to avoid polluting global namespace
(function(){
    function initToggles(){
        var toggles=document.querySelectorAll('.toggle-element');

        for(var i=0;i<toggles.length;i++) {
            toggles[i].addEventListener('click',function(ev){
                var val=ev.target && ev.target.getAttribute('data-val');
                if(val){
                    var parent=ev.target.closest('.toggle-parent');
                    if(parent){
                        parent.setAttribute('data-show',val);
                    }
                }
            });
        }
    }
    
    function pageInit(){
        initToggles();
    }
    
    if (document.readyState==='complete'||document.readyState==='loaded'||document.readyState==='interactive') {
        pageInit();
    }else{
        window.addEventListener('DOMContentLoaded',function(ev){
            pageInit();
        });
    }
})();
