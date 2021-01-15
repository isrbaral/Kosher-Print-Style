javascript: (function() {
    let recipeprint = "https://www.kosher.com/recipe/print/" + window.location.pathname.match(/\d+$/g);

    let iframe = document.createElement("iframe");
    iframe.src = recipeprint;
    iframe.setAttribute("id", "printiframe");
    document.body.appendChild(iframe);
    setTimeout(
        function(){
            let printframe = document.getElementById("printiframe").contentDocument;
    
            let css = printframe.styleSheets[2];
            css.insertRule('.print{font-size:14pt!important}');
            css.insertRule('.recipe-print__directions ol>li{line-height:1.2!important}');
            css.insertRule('.recipe-print__callout-meta-description{line-height:1.2!important}');
            css.insertRule('.recipe-print__callout-meta-container::before{font-size:0!important;}');
            css.insertRule('.recipe-print__callout{font-size:9pt!important}');
            let use = printframe.getElementsByTagName("use");
            for (let i=0;i<use.length;i++) {
                use[i].setAttribute("fill","#7a087a");
            };
            printframe.getElementsByTagName('header')[0].setAttribute('style','background-color:#fff');
            document.getElementById("printiframe").contentWindow.print();
        },500);
})()