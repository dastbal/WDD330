alert('Welcome to Quiz Ninja!');

// I added more question
// use arrow function 
// and  use the method toLowerCase  to match the answers without  need to be precised

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0 // initialize score

const start = (quiz)=>{
    for (const [q,a] of quiz ){
        let response = ask(q)
        check(response,a)
    }

}

const check = (response,a)=>{
    if (response.toLowerCase() === a.toLocaleLowerCase()){
        alert('Correct')
        return score += 1
    }
    else{
        alert(`Wrong! The correct answer was ${a}`)
    }

}
const ask = (q)=>{
    return prompt(q)
    

}
const gameOver = (score)=>{
    alert(`Game Over, you scored ${score} point${score == 1 ? '' : 's'}`);
    

}

start(quiz)
gameOver(score)

                