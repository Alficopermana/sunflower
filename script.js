// CONFETTI SYSTEM
document.getElementsByClassName("button")[0].addEventListener("click", () => {
var count = 400;
var defaults = {
    origin: { y: 0.6 }
    };

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26+100,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60+100,
});
fire(0.35, {
  spread: 100+100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120+100,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120+100,
  startVelocity: 45,
});
})

// WISH SYSTEM
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
