function drop(category) {

	element = document.getElementById(category);

	if (element.parentNode.childNodes[2].className != 'hidden') {
		element.parentNode.childNodes[2].className = 'hidden';
	}
	else {
		element.parentNode.childNodes[2].className = 'visible';
	}
}

function dropper(catName) {

	document.write(	"<span class='dropper' onclick=\"drop('"
					+ catName
					+ "')\"'>v</span>") 
}