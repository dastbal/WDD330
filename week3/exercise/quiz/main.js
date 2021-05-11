alert('Welcome to Quiz Ninja!');

// I added more question
// use arrow function 
// and  use the method toLowerCase  to match the answers without  need to be precised

const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "dastball",realName: "David Balladares" },
    { name: "sastball",realName: "Savid Balladares" },
    ];

    // View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
    };

    const game = {
        start(quiz){
            this.questions = [...quiz];
            this.score = 0;
            // main game loop
            for(const question of this.questions){
            this.question = question;
            this.ask();
            }
            // end of main game loop
            this.gameOver();
        },
        ask(){
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question)
            const response =  prompt(question);
            this.check(response);
        },
        check(response){
            const answer = this.question.realName;
            if( response.toLowerCase() === answer.toLowerCase()){
            view.render(view.result,'Correct!',{'class':'correct'});
                
            alert('Correct!');
            view.render(view.score, this.score);
            this.score++;
            } else {
                view.render(view.result , `Wrong! The correct answer was ${answer}` ,{'class':'wrong'})
            alert(`Wrong! The correct answer was ${answer}`);
            }
        },
        gameOver(){
            view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`)
            alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        }
        }
        game.start(quiz)
            

                