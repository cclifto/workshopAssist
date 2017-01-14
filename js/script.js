console.log('here be javascript')
$.get('https://tiy-bulletin-board.herokuapp.com/api/bulletin')
	.then(handleResponse)

console.log('i just requested the bulletin')

function handleResponse(serverResponse){
	console.log(serverResponse)
}