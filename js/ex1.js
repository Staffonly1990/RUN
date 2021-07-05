"use strict";

const body = document.querySelector("body")
const slider_left = document.querySelector('.slider_left')
const slider_right = document.querySelector('.slider_right')
const slider_container = document.querySelector('.products_four_slider')
const slider_track = document.querySelector('.slider_track')
const slider_item = document.querySelectorAll('.slider_item')
let position = 0
let slidesToScroll = 3
let items_count
let movePosition
let maxWidth
let slidesToShow
let slider_itemWidth

let F_Slider = (show_c) => {
	slidesToShow = show_c
	slider_itemWidth = slider_container.offsetWidth / slidesToShow
	movePosition = slidesToScroll * slider_itemWidth
	items_count = slider_item.length
	maxWidth = -(items_count - slidesToShow) * slider_itemWidth


	slider_item.forEach(element => {
		element.style.cssText = `
	min-width:${slider_itemWidth - 30}px;
	`
	});
}

slider_left.addEventListener("click", () => {
	const itemL = Math.abs(position) / slider_itemWidth
	if (position < 0) {
		position += itemL > slidesToScroll ? movePosition : itemL * slider_itemWidth
		setPosition()
	}
})

slider_right.addEventListener("click", () => {
	const itemL = items_count - (Math.abs(position) + slidesToShow * slider_itemWidth) / slider_itemWidth
	if (position > maxWidth) {
		position -= itemL > slidesToScroll ? movePosition : itemL * slider_itemWidth
		setPosition()
	}
})

const setPosition = () => {
	slider_track.style.cssText = `
transform: translateX(${position}px);
`
}



let company_norm = document.querySelector(".company.norm")
let company_small = document.querySelector(".company.small")
let company_btn = document.querySelector(".company .button_main.back_blue")

company_btn.addEventListener("click", () => {
	company_norm.classList.add("active")
	products_small.classList.add("active")
	services_small.classList.add("active")
	company_small.classList.remove("active")
	products_norm.classList.remove("active")
	services_norm.classList.remove("active")
})




let products_norm = document.querySelector(".products.norm")
let products_small = document.querySelector(".products.small")
let products_btn = document.querySelector(".products .button_main.back_blue")


products_btn.addEventListener("click", () => {
	products_norm.classList.add("active")
	company_small.classList.add("active")
	services_small.classList.add("active")

	products_small.classList.remove("active")
	company_norm.classList.remove("active")
	services_norm.classList.remove("active")

	F_Slider(4)
})



let services_norm = document.querySelector(".services.norm")
let services_small = document.querySelector(".services.small")
let services_btn = document.querySelector(".services .button_main.back_blue")

services_btn.addEventListener("click", () => {
	services_norm.classList.add("active")
	company_small.classList.add("active")
	products_small.classList.add("active")

	services_small.classList.remove("active")
	company_norm.classList.remove("active")
	products_norm.classList.remove("active")
})

window.addEventListener("resize", () => {
	if (body.offsetWidth > 750) {
		F_Slider(4)
	}
	else {
		F_Slider(2)
	}
})


const burger_menu = document.querySelector(".burger_menu")
const menu_list = document.querySelector(".mobil_menu_list")
let m_m_b = false

burger_menu.addEventListener('click', () => {
	m_m_b = !m_m_b

	if (m_m_b) {
		menu_list.classList.add("active")
	}
	else {
		menu_list.classList.remove("active")
	}
})



