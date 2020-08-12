var userchoice = prompt('Please enter Rock, Paper or Scissors.');
userchoice = userchoice.toLowerCase();
 
if(userchoice === 'rock' || userchoice === 'paper'
    || userchoice === 'scissors') {
    document.write('You picked ' + userchoice + '<br />')
    } else {
        documents.write('Pleases pick something specified.')
    } 
 
    var computerPick = Math.random();
    var computerChoice = 'scissors';
    if (computerPick < 0.34)  {
        computerChoice = 'rock';
    } else if (computerPick <= 0.66 ) {
         computerChoice = 'paper'
    }
    document.write('The computer picked: ' + computerChoice);
 
    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            return 'It is a tie';
        } 
        if (choice1 === 'rock') {
            if (choice2 === 'paper') {
                return 'The computer won!'
            } else {
                return 'You WON!!!'
            }
        }
 
        if (choice1 === 'paper') {
            if (choice2 === 'scissors') {
                return 'The computer won!';
            } else {
                return 'You WON!!!'
            }
        }
 
        if (choice1 === 'scissors') {
            if (choice2 === 'rock') {
                return 'The computer won!';
            
            } else  {
                return 'You WON!!!'
            } 
        }
    }
 
    var winner = compare(userchoice, computerChoice);
    document.write('the winner is: ' + winner);
 
 
