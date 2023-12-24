const hook = document.getElementById("thehook")
const get = document.getElementById("get")
const fill = document.getElementById("thefill")


var imageUrls = ['./img/omg.jpg', './img/fish.jpg', './img/wohohohoho.jpg'];
var randomIndex = Math.floor(Math.random() * imageUrls.length);

document.getElementById("mainContainer").style.backgroundImage = 'url(' + imageUrls[randomIndex];







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




get.addEventListener("click", function () {
	fill.innerHTML = null;
	const facts = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf',
			'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(`https://facts-by-api-ninjas.p.rapidapi.com/v1/facts?limit=5`, facts)
		.then(res => res.json())
		.then((data) => {
			console.log("fact", data)
			// hook.innerHTML = 
			for (i in data) {
				fill.insertAdjacentHTML("beforeend",
					`<p>${data[i].fact}</p>`
				)
			}
		})
})