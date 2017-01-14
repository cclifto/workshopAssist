var bulletinBoardEl = document.querySelector('#bulletin-board')

function handleResponse(bulletinsArray){
	var html = '<h2>bulletins loaded!</h2>'
	//FOR every bulletin, we will write an HTML element and insert the content.
	var firstBulletin = bulletinsArray[0]
	console.log(firstBulletin)
	html += '<div>'
	html +=		'<h3>' + firstBulletin.title + '</h3>'
	html += 	'<p>' + firstBulletin.content + '</p>'
	html += 	'<p>' + firstBulletin.signed + '</p>'
	html += '</div>'
	bulletinBoardEl.innerHTML = html
}

$.get('https://tiy-bulletin-board.herokuapp.com/api/bulletin')
	.then(handleResponse)

bulletinBoardEl.innerHTML = '<img src="Loading_icon.gif">'

