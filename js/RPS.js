let userScore = 0;
let compScore = 0;
let username = prompt('Hi, what is your name?');
let choice = prompt(`Welcome to rock, paper, scissors, ${username}! \n\nHow many times do you want to play?`);
for (let i = 0; i < choice; i++) {
    let userInput = prompt('Enter R for rock, P for paper or S for scissors:');
    if (userInput !== 'R' && userInput !== 'P' && userInput !== 'S') {
        alert('Invalid input!');
    }
    else {
        let arr = ['R', 'P', 'S'];
        let map = new Map([
            ['R', 'Rock'],
            ['P', 'Paper'],
            ['S', 'Scissors']
        ]);
        let compInput = arr[Math.floor(Math.random() * 3)];
        let result = `You chose ${map.get(userInput)}!\n\nComputer chose ${map.get(compInput)}!\n\n`;
        if (userInput === compInput) {
            result += 'It\'s a draw!';
        } else if (userInput === 'R' && compInput === 'P' || userInput === 'P' && compInput === 'S' || userInput === 'S' && compInput === 'R') {
            result += 'Computer wins!';
            compScore += 1;
        }
        else {
            result += 'You win!';
            userScore += 1;
        }
        alert(result);
    }
    alert(`Your score: ${userScore}\n\nComputer score: ${compScore}`);
}
if (userScore > compScore) {
    alert('You win the match!');
} else if (compScore > userScore) {
    alert('Computer wins the match!');
} else {
    alert('It\'s a draw/!');
}
alert('Thanks for playing!\n\nTo play again, just reload!')