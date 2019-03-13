"use strict";

const buttons = document.querySelectorAll('[id^="location"]');


const hideAll = () => {
  buttons.forEach( t => {
    t.classList.remove('showtext', 'highlight');
  });
}


const toggleStyle = (ev) => {
  const button = ev.target;
  if ( !button.classList.contains('showtext') ) hideAll();

  button.classList.toggle('showtext');
  button.classList.toggle('highlight');

  const div = ev.target.nextElementSibling;
  div.addEventListener("click", hideAll);
}


buttons.forEach( button => 
  button.addEventListener("click", toggleStyle) 
);
