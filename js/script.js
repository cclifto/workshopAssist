var bulletinBoardEl = document.querySelector('#bulletin-board')
0
console.log('here be javascript')
$.get('https://tiy-bulletin-board.herokuapp.com/api/bulletin')
	.then(handleResponse)

bulletinBoardEl.innerHTML = '<img src="Loading_icon.gif">'

function handleResponse(serverResponse){
	console.log(serverResponse)
	bulletinBoardEl.innerHTML = '<h2>bulletins loaded!</h2>'
}