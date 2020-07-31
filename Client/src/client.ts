class Question {
    public frageId: number;
    public text: string;

    constructor(frageId: number, text: string) {
        this.frageId = frageId;
        this.text = text;
    }
}

let iterator = 1;

function iterate(){
    if(iterator <= 14){
        iterator = iterator +1;
    }
    else if (iterator == 15){
        hideWeiterBtn()
        $('#end_btn').show()
        $('#btnList').hide()
        $('#quest').hide();
    }
}
$(() => {
    $("#nav-placeholder").load("nav.html");
    $("#footer-placeholder").load("footer.html");

    $(".rb").on("click", function (){
        if(iterator <= 14){
            $("#tipps").show();
            let url: string = iterator.toString() + ".html"
            $("#tipps").load(url);
        }
        else{
            $("#tipps").hide();
        }
    })

    $("#start_btn").on("click",
        function(){
            getQuestionFromDatabase(iterator);
            getAnswerFromDatabase(iterator);
            hideStartBtn()
            hideStartText()
            $('#btnList').show()

        });

    $('#render_question_btn').on("click", function(){
        if(iterator <= 15){
            sendResultToDatabase(iterator.toString(), getCurrentSelectedRadioButton());
            iterate();
            clearAllAnswers()
            getQuestionFromDatabase(iterator)
            getAnswerFromDatabase(iterator)
            $("#tipps").hide();
        }
    })

})


function getCurrentSelectedRadioButton(): string {
    const rb1 = document.getElementById('rb1') as HTMLInputElement;
    const rb2 = document.getElementById('rb2') as HTMLInputElement;
    const rb3 = document.getElementById('rb3') as HTMLInputElement;
    const rb4 = document.getElementById('rb4') as HTMLInputElement;
    const rb5 = document.getElementById('rb5') as HTMLInputElement;

    if(rb1.checked){
        rb1.checked = false;
        return "1";
    }
    if(rb2.checked){
        rb2.checked = false;
        return "2";
    }
    if(rb3.checked){
        rb3.checked = false;
        return "3";
    }
    if (rb4.checked){
        rb4.checked = false;
        return "4";
    }
    if(rb5.checked){
        rb5.checked = false;
        return "5";
    }
}

function hideStartBtn() {
    let btn = document.getElementById("start_btn");
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function hideWeiterBtn() {
    let endBtn = document.getElementById("render_question_btn");
    if (endBtn.style.display === "none") {
        endBtn.style.display = "block";
    } else {
        endBtn.style.display = "none";
    }
}

function hideStartText() {
    let endBtn = document.getElementById("text");
    if (endBtn.style.display === "none") {
        endBtn.style.display = "block";
    } else {
        endBtn.style.display = "none";
    }
}

function renderQuestion(questions: Question) {
    const questionButton: JQuery = $('#render_question_btn');
    const frage: JQuery = $('#quest');
    frage.text(questions.text);
    questionButton.empty()
    const renderQuestionBtn: JQuery = $(`
        <button class="btn waves-effect waves-light render_question_button pink darken-1" id="next_btn" data-question-id="${questions.frageId}">
            Weiter
            <i class="material-icons right">keyboard_arrow_right</i>
        </button>
        `);
    questionButton.append(renderQuestionBtn);
}



function getQuestionFromDatabase(frageId: number){

    $.ajax({
        url:'/frage/' + frageId,
        type:'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: (response) => {
            console.log(response.message);
            console.log(response.frageId);
            console.log(response.text);
            renderQuestion(response.question);
        }
    })
}

function clearAllAnswers(){
    const answer1: JQuery = $('#answer1')
    answer1.empty()
    const answer2: JQuery = $('#answer2')
    answer2.empty()
    const answer3: JQuery = $('#answer3')
    answer3.empty()
    const answer4: JQuery = $('#answer4')
    answer4.empty()
    const answer5: JQuery = $('#answer5')
    answer5.empty()
}

function renderAnswer(answers: String[]) {

    const answer1: JQuery = $('#answer1')
    const answer1Content: JQuery = $(`
    <p> ${answers[0]} </p>
    `);
    answer1.append(answer1Content);

    const answer2: JQuery = $('#answer2')
    const answer2Content: JQuery = $(`
    <p> ${answers[1]} </p>
    `);
    answer2.append(answer2Content);

    const answer3: JQuery = $('#answer3')
    const answer3Content: JQuery = $(`
    <p> ${answers[2]} </p>
    `);
    answer3.append(answer3Content);

    const answer4: JQuery = $('#answer4')
    const answer4Content: JQuery = $(`
    <p> ${answers[3]} </p>
    `);
    answer4.append(answer4Content);

    const answer5: JQuery = $('#answer5')
    const answer5Content: JQuery = $(`
    <p> ${answers[4]} </p>
    `);
    answer5.append(answer5Content);

    /*let answerArea: JQuery = $('#answers');
    let index = 1;
    // answerArea.empty()
    for (let antwort of answers) {
        let newAnswer: JQuery = $(`

        <input class="with-gap" name="group1" type="radio" id=${index}/>
        <p>${antwort}</p>


        `)
        index++;
        answerArea.append(newAnswer);
    }
    */

}



function openNextQuestion() {
    // Get product id from button attribute 'data-product-id'
    //const productId: number = $(event.currentTarget).data('product-id');
    const urlParams = new URLSearchParams(window.location.search);
    const frageId = urlParams.get('frageId');

    $.ajax({
        url: '/antworten/' + frageId,
        type: 'GET',
        dataType: 'json',
        success: (response) => {
            renderAnswer(response.question);
        },
    }).then(()=>{});
}

function getAnswerFromDatabase(frageId: number) {

    $.ajax({
        url: '/antworten/' + frageId,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: (response) => {
            console.log(response.message);
            console.log(response.answerId);
            console.log(response.frageId);
            console.log(response.answer);
            renderAnswer(response.answer);
        }
    })
}

function sendResultToDatabase(frageID: string, antwortID: string){
    $.ajax({
        url: '/auswertung',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
            frageId: frageID,
            antwortId: antwortID,
        }),
        success: (response) => {
            console.log(response.message);
        }
    })
}

