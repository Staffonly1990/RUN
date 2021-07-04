"use strict";

let slidesToShow = 2

let body = document.querySelector("body")

let body_Width = body.offsetWidth

let small = document.querySelectorAll(".small")



let position = 0
const slidesToScroll = 3
const slider_container = document.querySelector('.products_four_slider')
const slider_track = document.querySelector('.slider_track')
const slider_item = document.querySelectorAll('.slider_item')
const slider_left = document.querySelector('.slider_left')
const slider_right = document.querySelector('.slider_right')

let slider_itemWidth = slider_container.offsetWidth / slidesToShow
let movePosition = slidesToScroll * slider_itemWidth
let items_count = slider_item.length
let maxWidth = -(items_count - slidesToShow) * slider_itemWidth


slider_item.forEach(element => {
	element.style.cssText = `
	min-width:${slider_itemWidth - 30}px;
	`
});


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







