//const options = { method: "GET", headers: { accept: "application/json" } };
document.addEventListener("DOMContentLoaded", function () {
	getRewards();
});

const prizeYear = document.querySelector(".year");
const prizeField = document.querySelector(".field");
const prizeName = document.querySelector(".first_name");
const prizeMotiv = document.querySelector(".motivation");

function getRewards() {
	fetch("https://api.nobelprize.org/2.1/nobelPrizes")
		.then((response) => response.json())
		.then((prize) => {
			console.log(prize.nobelPrizes);
			console.log(prize.nobelPrizes[1]);
			prizeYear.innerText = prize.nobelPrizes[1].awardYear;
			prizeField.innerHTML = prize.nobelPrizes[1].categoryFullName.en;
			prizeName.innerHTML = prize.nobelPrizes[1].laureates[0].fullName.en;
			prizeMotiv.innerHTML =
				prize.nobelPrizes[1].laureates[0].motivation.en;
		})
		.catch((err) => console.log(err));
}
