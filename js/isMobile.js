(function(){
    var suserAgent = navigator.userAgent.toLowerCase();
    if(/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows mobile/.test(suserAgent)){
        localStorage.setItem('device','移動端' );
    }
    else{
        localStorage.setItem('device','pc端');
    }
})();