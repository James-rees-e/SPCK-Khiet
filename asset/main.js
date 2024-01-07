const hook = document.getElementById("thehook");
const get = document.getElementById("get");
const fill = document.getElementById("fillOuter");
const selectLimit = document.getElementById("selectLimit");
const selectType = document.getElementById("selectType");
var imageUrls = ["./img/omg.jpg", "./img/fish.jpg", "./img/wohohohoho.jpg"];
var randomIndex = Math.floor(Math.random() * imageUrls.length);

document.getElementById("generatorOuter").style.backgroundImage =
  "url(" + imageUrls[randomIndex];

get.addEventListener("click", function () {
  console.log(selectLimit.value);
  fill.innerHTML = null;
  const facts = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf",
      "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
    },
  };
  const jokes = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
  };

  const trivia = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc8409eca5mshb2bb71c3f40e74cp183740jsn0b1cb69a9fbf",
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
  };
  if (selectLimit.value !== "Amount") {
    document.getElementById("answerBtn").classList.add("hide");
    if (selectType.value === "facts") {
      fetch(
        `https://facts-by-api-ninjas.p.rapidapi.com/v1/facts?limit=${selectLimit.value}`,
        facts
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("fact", data);
          // hook.innerHTML =
          for (i in data) {
            fill.insertAdjacentHTML("beforeend", `<li>${data[i].fact}</li>`);
          }
        });
    } else if (selectType.value === "jokes") {
      fetch(
        `https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=${selectLimit.value}`,
        jokes
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("jokes", data);
          // hook.innerHTML =
          for (i in data) {
            fill.insertAdjacentHTML("beforeend", `<li>${data[i].joke}</li>`);
          }
        })
        .catch((error) => console.error("Error fetching jokes data:", error));
    } else {
      fetch(
        `https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?limit=${selectLimit.value}`,
        trivia
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("trivia", data);
          // hook.innerHTML =
          for (i in data) {
            fill.insertAdjacentHTML(
              "beforeend",
              `<li>${data[i].question}</li>`
            );
            document
              .getElementById("listAnswer")
              .insertAdjacentHTML("beforeend", `<li>${data[i].answer}</li>`);
          }
          document.getElementById("answerBtn").classList.remove("hide");
        })
        .catch((error) => console.error("Error fetching trivia data:", error));
    }
  } else {
    alert("Please select amount");
  }
});
