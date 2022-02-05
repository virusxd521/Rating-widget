const stars = document.querySelectorAll('.rating__star');
const displayingValue = document.querySelector(".rating__value");
const onTopStar = "rating__star--on";

// Looping over the items
stars.forEach((star, index) => {
    // adding event to each item (star)
    star.addEventListener('click', (e) => {
        // Removes all lighting class from the items in the list
        stars.forEach(item => item.classList.remove(onTopStar));
        // Function which will iterate over the elements and 
        // add the appropriate class to those elements
        iterationFunction(stars, index);
    })
})

// Function which will iterate over the elements
const iterationFunction = (allItems, itemIndex) => {
    // displaying the numbers of the highlighted stars
    displayingValue.textContent = itemIndex + 1;
    console.log(itemIndex + 1);
    // looping over the array and add the class which will highlight the right elements
    for(let i = 0; i <= itemIndex ; i++){
        console.log(i);
        allItems[i].classList.add(onTopStar);
    }
}
