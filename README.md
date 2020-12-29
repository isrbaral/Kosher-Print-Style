# Kosher.com-Print-Style Bookmarklet

Fixed up some of the more annoying parts of the kosher.com print style making it more readable once printed.

To add to your browser:
### Chrome / Edge
1 Copy this by triple clicking in the box and typing `[CTRL] + [C]`:
```javascript
javascript:(function(){let b='https://www.kosher.com/recipe/print/'+window.location.pathname.match(/\d+$/g);if(window.location.href!=b)window.open(b,'_blank');else{document.getElementsByTagName('header')[0].setAttribute('style','background-color:#fff');let a=document.styleSheets[2];a.insertRule('.print{font-size:14pt!important}'),a.insertRule('.recipe-print__directions ol>li{line-height:1.2!important}'),a.insertRule('.recipe-print__callout-meta-description{line-height:1.2!important}'),a.insertRule('.recipe-print__callout-meta-container::before{font-size:0!important;}'),a.insertRule('.recipe-print__callout{font-size:9pt!important}');let c=document.getElementsByTagName('use');for(let d=0;d<c.length;d++)c[d].setAttribute('fill','#000');window.print();}})()
```
1 Type `[CTRL] + [D]`
1 Click "More"
1 Triple click in the __URL__ field, to select everything
1 Paste in __URL__ field (`[CTRL] + [V]`)
1 Save in bookmarks toolbar (keep it visible)

To Use:
1 Navigate to a recipe page: e.g. https://www.kosher.com/recipe/quinoa-stuffed-chicken-2932
1 Click on the bookmarklet
  1 This will open the print page in a new tab
1 Click on the bookmarklet again
  1 This will apply the nicer style
1 Enjoy!
