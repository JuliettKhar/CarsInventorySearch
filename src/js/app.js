import { cars } from './cars';

let yearSelector;
let makeSelector;
let minSelector;
let maxSelector;
let doorsSelector;
let transmissionSelector;
let colorSelector;
let container;
let searchFields = {
	make: '',
	year: '',
	min: '',
	max: '',
	doors: '',
	transmission: '',
	color: ''
}

function findElements() {
	makeSelector = document.querySelector('#make');
	yearSelector = document.querySelector('#year');
	container = document.querySelector('#result');
	minSelector = document.querySelector('#min');
	maxSelector = document.querySelector('#max');
	doorsSelector = document.querySelector('#doors');
	transmissionSelector = document.querySelector('#transmission');
	colorSelector = document.querySelector('#color');
}

function createYearSelect() {
	const maxyear = new Date().getFullYear();
	const minyear = maxyear - 15;

	for(let i = maxyear; i > minyear; i--) {
		let option = document.createElement('option');
		option.value = i;
		option.innerText = i;
		yearSelector.appendChild(option);
	}
}

function getCars() {
	const data = cars;
	return data;
}

function clearLayout() {
	container = document.querySelector('#result');
	while(container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function showCars(cars) {
	clearLayout();
	cars.forEach( car => {
		const carHTML = document.createElement('p');
		carHTML.innerHTML = `
				${car.make} ${car.carmodel} - ${car.year} - ${car.doors} Doors - Transmission: ${car.transmission} Price: ${car.price} Color: ${car.color}
		`;
		container.appendChild(carHTML);
	});
}

function noResults() {
	clearLayout();
	const noResults = document.createElement('div');
	noResults.classList.add('alert', 'error');
	noResults.appendChild(document.createTextNode('No results found'));
	container.appendChild(noResults);
}

function filterCars() {
	const result = getCars().filter(filterMake).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmission).filter(filterColor);
		if(result.length) {
			showCars(result);
		}
		else {
			noResults();
		}
}

function filterMake(car) {
	if(searchFields.make) {
		return car.make === searchFields.make;
	}
	else {
		return car;
	}
}

function filterYear(car) {
	if(searchFields.year) {
		return car.year === searchFields.year;
	}
	else {
		return car;
	}
}

function filterMin(car) {
	if(searchFields.min) {
		return car.price >= searchFields.min;
	}
	else {
		return car;
	}doors
}

function filterMax(car) {
	if(searchFields.max) {
		return car.price <= searchFields.max;
	}
	else {
		return car;
	}
}

function filterDoors(car) {
	if(searchFields.doors) {
		return car.doors === searchFields.doors;
	}
	else {
		return car;
	}
}

function filterTransmission(car) {
	if(searchFields.transmission) {
		return car.transmission === searchFields.transmission;
	}
	else {
		return car;
	}
}

function filterColor(car) {
	if(searchFields.color) {
		return car.color === searchFields.color;
	}
	else {
		return car;
	}
}

function make(event) {
	const { target } = event;
	searchFields.make = target.value;
	filterCars();
}

function year(event) {
	const { target } = event;
	searchFields.year = Number(target.value);
	filterCars();
}

 function minPrice(event) {
	const { target } = event;
	searchFields.min = Number(target.value);
	filterCars();
}

 function maxPrice(event) {
	const { target } = event;
	searchFields.max = Number(target.value);
	filterCars();
}

function doors(event) {
const { target } = event;
	searchFields.doors = Number(target.value);
	filterCars();
}

function transmission(event) {
	const { target } = event;
	searchFields.transmission = target.value;
	filterCars();
}

function color(event) {
	const { target } = event;
	searchFields.color = target.value;
	filterCars();
}



function onLoad() {
	let cars = getCars();
	showCars(cars);
}


function subscribe() {
	document.addEventListener('DOMContentLoaded', onLoad);
	makeSelector.addEventListener('input', make);
	yearSelector.addEventListener('input', year);
	minSelector.addEventListener('input', minPrice);
	maxSelector.addEventListener('input', maxPrice);
	doorsSelector.addEventListener('input', doors);
	transmissionSelector.addEventListener('input', transmission);
	colorSelector.addEventListener('input', color);

}




export function init() {
	findElements();
	createYearSelect();
	subscribe();
}
