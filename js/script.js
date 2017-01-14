var bulletinBoardEl = document.querySelector('#bulletin-board')

function handleResponse(bulletinsArray){
	var html = '<h2>bulletins loaded!</h2>'
	//FOR every bulletin, we will write an HTML element and insert the content.
	

	for (var position = 0; position < bulletinsArray.length; position += 1){
		var bulletin = bulletinsArray[position]
		html += '<div>'
		html +=		'<h3>' + bulletin.title + '</h3>'
		html += 	'<p>' + bulletin.content + '</p>'
		html += 	'<p>' + bulletin.signed + '</p>'
		html += '</div>'
	}
	bulletinBoardEl.innerHTML = html

}

$.get('https://tiy-bulletin-board.herokuapp.com/api/bulletin')
	.then(handleResponse)

bulletinBoardEl.innerHTML = '<img src="Loading_icon.gif">'

