javascript: (function() {
    let recipepg = window.location.pathname;
    let regex = /\d{2,}/g;
    let recipecode = recipepg.match(regex);
    let recipeprint = "https://www.kosher.com/recipe/print/" + recipecode;
    if(window.location.href != recipeprint){window.open(recipeprint, '_blank');}
    else{
    document.getElementsByTagName('header')[0].setAttribute('style','background-color:#fff');
    let css = document.styleSheets[2];
    css.insertRule('.print{font-size:14pt!important}','.recipe-print__directions ol>li{line-height:18px!important}','.recipe-print__callout-meta-description{line-height:18px!important}');
    let use = document.getElementsByTagName("use");
    for (let i in use) {
        use[i].setAttribute("fill", "#000");
    };
}
})()