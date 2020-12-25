javascript: (function() {
    let use = document.getElementsByTagName("use");
    for (let i in use) {
        use[i].setAttribute("fill", "#000")
	}
	
})()