javascript: (function() {
    let recipeprint = "https://www.kosher.com/recipe/print/" + window.location.pathname.match(/\d+$/g);
    if(window.location.href != recipeprint){
        window.open(recipeprint, '_blank');
    }
    else{
        document.getElementsByTagName('header')[0].setAttribute('style','background-color:#fff');
        let css = document.styleSheets[2];
        css.insertRule('.print{font-size:14pt!important}'),
        css.insertRule('.recipe-print__directions ol>li{line-height:1.2!important}'),
        css.insertRule('.recipe-print__callout-meta-description{line-height:1.2!important}'),
        css.insertRule('.recipe-print__callout-meta-container::before{font-size:0!important;}'),
        css.insertRule('.recipe-print__callout{font-size:9pt!important}');
        let use = document.getElementsByTagName("use");
        for (let i=0;i<use.length;i++) {
            use[i].setAttribute("fill","#000");
        };
        window.print();
    }
})()