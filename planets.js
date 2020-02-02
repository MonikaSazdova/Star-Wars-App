const rootNode = document.getElementById('root');
const tBodyNode = document.getElementById('tBody');
const containerNode = document.getElementById('cont');
containerNode.style.display = 'none';



function getPlanets(url) {
	fetch(url)
		.then(response => {
			return response.json()
		})
		.then(data => {
			let planets = data.results;

			for (const planet of planets) {
			let tr = document.createElement('tr');
			
			let td = document.createElement('td');
			td.innerHTML = planet.name;
			tr.appendChild(td);
			
			td = document.createElement('td');
			td.innerHTML = planet.population;
			tr.appendChild(td);
			
			td = document.createElement('td');
			td.innerHTML = planet.climate;
			tr.appendChild(td);
			
			td = document.createElement('td');
			td.innerHTML = planet.gravity;
			tr.appendChild(td);
		 
		  tBodyNode.append(tr);
			}
			
		})
		.catch();
}

const btnShowPlanetsNode = document.getElementById('btnShowPlanets');
btnShowPlanetsNode.addEventListener('click', () => {
	getPlanets('https://swapi.co/api/planets/?page=1');
	containerNode.style.display = "block"
	btnNextNode.style.display = 'block';
	btnShowPlanetsNode.style.display = 'none';
	rootNode.style.backgroundImage = "url('http://www.talencia.cat/mypics/max/17/171872_star-wars-star-backgrounds.jpg')"
});


const btnNextNode = document.getElementById('btnNext');
btnNextNode.addEventListener('click', () => {
	tBodyNode.innerHTML = '';
	getPlanets('https://swapi.co/api/planets/?page=2');
	btnNextNode.style.display = 'none';
	btnPrevNode.style.display = 'block';
});

const btnPrevNode = document.getElementById('btnPrev');
btnPrevNode.style.display = "none";
btnPrevNode.addEventListener('click', () => {
	tBodyNode.innerHTML = '';
	getPlanets('https://swapi.co/api/planets/?page=1')
	btnNextNode.style.display = 'block';
	btnPrevNode.style.display = "none";
});





















// const btnShowPlanets = document.getElementById("btnShowPlanets");


// const result = document.getElementById("result");
// const loader = document.getElementById("loader");
// const btnNext = document.getElementById("btnNext");
// const btnPrev = document.getElementById("btnPrev");



// const getPlanets = () => {
//     const url = "https://swapi.co/api/planets/?page=1";
//     toggleLoader(true);
//     $.ajax({
//         url: url,
//         success: (data) => {
//             console.log("The request succedeed!", data);
//             toggleLoader(false);
//             displayPlanets(data.results);
//         },
//         error: (err) => {
//             console.log(err);
//         }
//     })
// }

// const toggleLoader = (toggle) => {
//     if (toggle)
//         loader.style.display = 'block';
//     else
//         loader.style.display = 'none';
// }

// const displayPlanets = (planets) => {
//     if (planets != null) {
//         result.innerHTML = '';
//         result.innerHTML += `
//         <div class="row">
//             <div class="col-md-3">Name</div>
//             <div class="col-md-2">Population</div>
//             <div class="col-md-2">Climate</div>
//             <div class="col-md-2">Gravity</div>
//         </div>`;
//         for (const planet of planets) {
//             result.innerHTML += `
//         <div class="row">
//             <div class="col-md-3">${planet.name}</div>
//             <div class="col-md-2">${planet.population}</div>
//             <div class="col-md-2">${planet.climate}</div>
//             <div class="col-md-2">${planet.gravity}</div>
//         </div>`;
//         }
//     } else {
//         result.innerHTML += '<h2>There is something wrong with the data!</h2>'
//     }
// }

// btnShowPlanets.addEventListener("click", getPlanets)