"use strict";
/*
DGL113:      Introduction to Java Script
Instructor:  Frank Lu
Assignment:  2
Due Date:    Jan 25th, 2021

Author:      Reginald McPherson
Date:        Jan 26th, 2021

KAYLEE GELZ
MARCH 9
ASSIGNMENT 8


Filename: resort.js
*/

/* Optionals
2b. Create an array of images and initialize it with all image names in the images folder.

2c. Modify the function randomImage() created in A2 so that the image name is randomly picked from the images array.
    i.      Generate random int that matches to a valid index number in the images array.
    ii.     Select the image name from the images array at the index position.
    iii.    Use this image name to make the src attribute string value to be used when the header image is clicked on.

*/

function printFooter() {
  let myDate = new Date();
  let day = myDate.getDate();
  let month = myDate.getMonth() + 1;
  let year = myDate.getFullYear();
  let lastVisitDate = `${month}/${day}/${year}`;
  document.getElementById(
    "footer"
  ).innerHTML = `<p>Today's date is: ${lastVisitDate} </p>`;
}
printFooter();

function randomImage() {
  let rand = Math.floor(Math.random() * 4) + 1;
  return `img/img${rand}.jpg`;
}
// randomImage();
