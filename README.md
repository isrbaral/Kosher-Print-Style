# Kosher.com-Print-Style Bookmarklet

Fixed up some of the more annoying parts of the kosher.com print style making it more readable once printed.

## Chrome / Edge
To add to your browser:
* Copy this by triple clicking in the box and typing `[CTRL] + [C]`:
```javascript
javascript:(function(){d=window.location.pathname;e=/\d{2,}/g;f=d.match(e);b='https://www.kosher.com/recipe/print/'+f;if(window.location.href!=b)window.open(b,'_blank');else{document.getElementsByTagName('header')[0].setAttribute('style','background-color:#fff');a=document.styleSheets[2];a.insertRule('.print{font-size:14pt !important}'),a.insertRule('.recipe-print__directions ol>li {line-height:18px !important}'),a.insertRule('.recipe-print__callout-meta-description {line-height:18px !important}');c=document.getElementsByTagName('use');for(g in c)c[g].setAttribute('fill','#000');}})()
```
* Type `[CTRL] + [D]`
* Click "More"
* Triple click in the __URL__ field, to select everything
* Paste in __URL__ field (`[CTRL] + [V]`)
* Save in bookmarks toolbar (keep it visible)

To Use:
* Navigate to a recipe page: e.g. https://www.kosher.com/recipe/quinoa-stuffed-chicken-2932
* Click on the bookmarklet
  * This will open the print page in a new tab
* Click on the bookmarklet again
  * This will apply the nicer style
* Enjoy!
