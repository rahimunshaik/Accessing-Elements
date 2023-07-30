// Get the element with the ID "demo" and store it in the variable 'demoId'
var demoId = document.getElementById("demo");

// Set a green border (1 pixel width, solid green color) for the element with ID "demo"
demoId.style.border = "1px solid green";

// Get all elements with the class "demo" and store them in the variable 'demoClass'
var demoClass = document.querySelectorAll(".demo");

// Set a blue border (1 pixel width, solid blue color) for the first element with class "demo"
demoClass[0].style.border = "1px solid blue";

// Set a blue border (1 pixel width, solid blue color) for the second element with class "demo"
demoClass[1].style.border = "1px solid blue";

// Change the text content of the second element with class "demo" to "Second Elements of Class"
demoClass[1].innerText = "Second Elements of Class";
