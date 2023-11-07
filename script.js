let choice = prompt(
    "Rock, Paper, or Scissors?   ... Stupid human doesn't realize that I will always choose Rock because Rock can bash everything! I think that's right...?"
  );
  
  if (choice === "rock") {
    alert(
      "Rock VS Rock. I tried to bash your Rock with my Rock but all it did was chip them both. No winner!"
    );
  } else if (choice === "paper") {
    alert(
      "Paper VS Rock. I tried to bash your paper with my Rock but you were sneaky and wrapped my Rock up! You Won!"
    );
  } else if (choice === "scissors") {
    alert(
      "Scissors VS Rock. I bash your pathetic Scissors with my powerful Rock! I win!"
    );
  } else {
    alert("Pitiful human doesn't even know hot to enter a proper command.");
  }
  