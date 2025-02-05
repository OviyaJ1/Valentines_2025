// script.js

// Function to handle button click events
var clickedNoNum = 0;
function selectOption(option) {
    // Check which option was clicked
    if (clickedNoNum >= 3) {
        displayImage("./images/why.gif");
        document.getElementById('question').innerText = "Why do you hate me??";
        document.getElementById('options').style.display = 'none';
    } else {
        if (option === 'yes') {
            //displayCatHeart(); // Display the cat-heart.gif

            displayImage("./images/hehe.gif");
            document.getElementById('question').innerText = "hehe i won";
            document.getElementById('options').style.display = 'none'; // Hide the buttons
            
        } else if (option === 'no') {
            clickedNoNum += 1;
            displayImage("./images/dumb_founded-resize.gif")
            document.getElementById('question').innerText = "You sure about that?\n I'll give you another chance.";
            
            if(clickedNoNum == 1) {
                document.getElementById('no-button').innerText = "Yeah, I'm sure."; 
                document.getElementById('yes-button').innerText = "Nope, I misclicked."; 
            } else if(clickedNoNum == 2) {
                document.getElementById('no-button').innerText = "Yup, I'm certain."; 
                document.getElementById('yes-button').innerText = "No, I'm joshing."; 
            } else {
                document.getElementById('no-button').innerText = "Yes, I hate you."; 
                document.getElementById('yes-button').innerText = "Nah, I acc like you."; 
            }

            // Increase font size of "Yes" button
            // var yesButton = document.getElementById('yes-button');
            // var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            // var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
            // yesButton.style.fontSize = newSize + 'px';
        }
    // } else {
    //     // If neither "Yes" nor "No" was clicked, show an alert message
    //     alert('Invalid option!');
    }
}

// Function to display the cat.gif initially
var catImage = new Image();
function displayImage(file) {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    // Set the source (file path) for the cat image
    catImage.src = file //'./images/hehe2.gif'; // Assuming the cat image is named "cat.gif"
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = './images/hehe.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the .gif initially
displayImage("./images/hehe2-resize.gif");

// Function to flash rainbow colors and then execute a callback function
// function flashRainbowColors(callback) { //HE WILL DIE!!!!!!!
//     var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
//     var i = 0;
//     var interval = setInterval(function() {
//         document.body.style.backgroundColor = colors[i];
//         i = (i + 1) % colors.length;
//     }, 200); // Change color every 200 milliseconds
//     setTimeout(function() {
//         clearInterval(interval);
//         document.body.style.backgroundColor = ''; // Reset background color
//         if (callback) {
//             callback();
//         }
//     }, 2000); // Flash colors for 2 seconds
// }