let indTotalEl = document.getElementById("ind-total");
let pakTotalEl = document.getElementById("pak-total");
let i = 0;
let present_run = 0;
let present_run2 = 0;
let present_wicket = 0;
let present_wicket2 = 0;
function play() {
  i++;
  let ball_count = "ball" + i;
  let ballEl = document.getElementById(ball_count);
  if (!ballEl) {
    return gameOver();
  }
  let new_run = genRandom();
  if (new_run == 0) {
    ballEl.innerText = "W";
    if (i > 6) {
      present_wicket2 += 1;
    } else {
      present_wicket += 1;
    }
  } else ballEl.innerText = new_run;
  console.log(new_run);
  if (i <= 6) {
    present_run = present_run + new_run;
    indTotalEl.innerText = present_run + "/" + present_wicket;
  } else {
    present_run2 = present_run2 + new_run;
    pakTotalEl.innerText = present_run2 + "/" + present_wicket2;
  }
  check();
}
function check() {
  if (present_run2 > present_run) {
    window.alert("Pakistan won the match");
  }
  if (i == 12) {
    return gameOver();
  }
  if (present_wicket == 2 && i < 6) {
    i = 6;
  }
  if (present_wicket2 == 2) {
    window.alert("India won the match");
  }
}

function gameOver() {
  if (present_run > present_run2) {
    window.alert("India won the match");
  } else {
    window.alert("Pakistan won the match");
  }

  buttonEl.disabled = true;
}
function genRandom() {
  return Math.floor(Math.random() * (7 - 0));
}
function refreshPage() {
  window.location.reload();
}
