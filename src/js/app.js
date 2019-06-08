import { cars } from './cars';

let yearSelector;
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
	yearSelector = document.querySelector('#year');
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
	
}


function onLoad() {
	let cars = getCars();
	showCars(cars);
}

function subscribe() {
	document.addEventListener('DOMContentLoaded', onLoad);
}

export function init() {
	findElements();
	createYearSelect();
	subscribe();
}