import { cars } from './cars';

let yearSelector;
let makeSelector;
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

function showCars(cars) {
	cars.forEach( car => {
		const carHTML = document.createElement('p');
		carHTML.innerHTML = `
				${car.make} ${car.carmodel} - ${car.year} - ${car.doors} Doors - Transmission: ${car.transmission} Price: ${car.price} Color: ${car.color}
		`;
		container.appendChild(carHTML);
	});
}

function filterCars() {
	const result = getCars().filter(filterMake).filter(filterYear);
	console.log(result)
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
		console.log(car)
		return car.year === searchFields.year;
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
	console.log(1)
	const { target } = event;
	searchFields.year = Number(target.value);
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
}




export function init() {
	findElements();
	createYearSelect();
	subscribe();
}
