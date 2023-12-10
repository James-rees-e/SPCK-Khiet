const facts = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf',
		'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(`https://facts-by-api-ninjas.p.rapidapi.com/v1/facts?limit=2`, facts)
	.then(res => res.json())
	.then((data) => {
		console.log(data)
	})

const jokes = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=2', jokes)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		// Xử lý dữ liệu về truyện cười ở đây
	})
	.catch(error => console.error('Error fetching jokes data:', error));

const trivia = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf',
		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia', trivia)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		// Xử lý dữ liệu về truyện cười ở đây
	})
	.catch(error => console.error('Error fetching trivia data:', error));