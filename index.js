import DoubleLinkedList from "./dll";
import images from "./images";
import "./style.css";

const list = new DoubleLinkedList();
const viewer = document.getElementById("viewer");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
// Load your images from the array.
images.forEach(image => list.push(image));

//Set the initial image in the gallery.
let idx = 0;
const counter = document.getElementById("counter");
counter.innerHTML = idx;

// Add an event listener to handle when the next button
// is clicked to increment the image gallery.
next.addEventListener("click", function() {
  // Implement the 'next' functionality here.
});

// Add an event listener to handle when the previous button
// is clicked to decrement the image gallery.
prev.addEventListener("click", function() {
  // Impliment the previous functionality here.
});
