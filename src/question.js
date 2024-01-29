class Question  {
    // YOUR CODE HERE:
    //
     constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
     }

     //methods

     shuffleChoices() {

        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
        }
        return this.choices;  // REVISAR
     }



    // 2. shuffleChoices()
}

/* 
{
    text: "Que es JS?"
    choices: ["lenguaje programacion", "patata", "baile"]
    answer: "lenguaje programacion"
}
*/
