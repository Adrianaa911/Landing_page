const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

//create the colors to be changed
const colors = [
    "#efd81d",
    "#61dbfb",
    "#41b883",
    "#b52e31",
    "#43853d",
    "#cf649a",
    "#e04e39",
];

// change the techs to fit the colors
const techs = ["JS", "React", "Vue", "Angular", "Node", "Sass", "Ember"];

let current = 1; 

//change the colors and tech according to it fits
const textStyle = () => {
    heading.style.color = colors[current -1];
    heading.textContent = techs[current -1];
    // change the colors of the button according to the tech and its color Xx
    btn.style.backgroundColor = colors[current -1];
    // change the content-tech, of the button
    btn.firstElementChild.textContent = techs[current -1];
};

let interval = setInterval(() => {
  boxes.forEach((box) => {
   // boxes move infinitely, without the first if statement 
   //=> boxes move 1 time and then stops
   if (current > boxes.length) current = 1;
    if(box.classList[1].split("-") [1] * 1 
=== current) {
    box.classList.add("active");
  } else {
       box.classList.remove("active");
    }
  });
  textStyle();
  current++;
}, 5000) 

// add event when click it to the boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((cube) => {
            cube.classList.remove("active");
        });
        box.classList.add("active");

        // makes the tech and box fit on working
        current = box.classList[1].split("-")
        [1] * 1;

       textStyle();

        //remove the default anime and use the click one
        // remains there until you delect again
        clearInterval(interval);
    });
});