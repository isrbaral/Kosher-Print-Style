javascript: (function() {
    let recipeprint = "https://www.kosher.com/recipe/print/" + window.location.pathname.match(/\d+$/g);
    if(window.location.href != recipeprint){
        window.open(recipeprint, '_blank');
    }
    else{
        document.getElementsByTagName('header')[0].setAttribute('style','background-color:#fff');
        document.styleSheets[2].insertRule('.print{font-size:14pt!important}','.recipe-print__directions ol>li{line-height:1.2!important}','.recipe-print__callout-meta-description{line-height:1.2!important}');
        let use = document.getElementsByTagName("use");
        for (let i in use) {
            use[i].setAttribute("fill", "#000");
        };
    }
})()