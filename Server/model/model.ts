export class Question {
    public frageId: number;
    public text: string;

    constructor(frageId: number, text: string) {
        this.frageId = frageId;
        this.text = text;
    }
}

export class Answer {
    public answerId: number;
    public frageId: number;
    public answer: string;

    constructor(answerId: number, frageId: number, answer: string) {
        this.answerId = answerId;
        this.frageId = frageId;
        this.answer = answer;
    }
}