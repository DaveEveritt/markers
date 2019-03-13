
"use strict";

const [...elArray] = document.querySelectorAll('[id^="location"]');

const toggleStyle = (el) => {
  console.log(`el: ${el}\ntarget: ${event.target}`);
  event.target.classList.remove('showtext');
  event.target.classList.remove('highlight');
  event.target.addEventListener("click", function() {
    this.classList.toggle('showtext');
    this.classList.toggle('highlight');
  })
}

const highlight = (el) => {
  el.addEventListener("click", toggleStyle)
}

elArray.map(highlight);





// "use strict";

// const [...elArray] = document.querySelectorAll('[id^="location"]');

// const toggleStyle = (el) => {
//   console.log(`el: ${el}\ntarget: ${event.target}`);
//   event.target.classList.remove('showtext');
//   event.target.classList.remove('highlight');
//   event.target.addEventListener("click", function() {
//     this.classList.toggle('showtext');
//     this.classList.toggle('highlight');
//   })
// }

// const highlight = (el) => {
//   el.addEventListener("click", toggleStyle)
// }

// elArray.map(highlight);



