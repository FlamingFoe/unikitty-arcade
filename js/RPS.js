function play()
{
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
        } else if (userInput==='R' && compInput==='P' || userInput==='P' && compInput==='S' || userInput==='S' && compInput==='R' ) {
            result += 'Computer wins!';
            // return -1;
        }
        else {
            result += 'You win!';
            // return 1;
        }
        alert(result);
    }
}

let username = prompt('Hi, what is your name?');
alert(`Welcome to rock, paper, scissors, ${username}! \n\n`);
play();


