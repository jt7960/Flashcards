$(document).ready(function(){
    //questions.questions.forEach($(".header").append('<div class="header-item hover-highlight">'+this['category']+'</div>'));
    

    

    unique_topics = createUniqueTopicsArray(questions.questions)
    for(item in unique_topics){
        addOptionToSelectBox(item, 'topic-select-box')
    }
    $("#card").flip();
    $(".flashcard-control").click(function(){
        $(".flashcard-category").text(questions.questions[current_question_index]['category']);
        $(".flashcard-question").text(questions.questions[current_question_index]['question']);
        $(".flashcard-answer").text(questions.questions[current_question_index]['answer']);
        if (current_question_index == questions.questions.length - 1){
            current_question_index = 0;
        }
        else{
            current_question_index += 1;    
        }
    });
        
});