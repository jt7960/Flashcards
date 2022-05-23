questions = {
    "questions": [
        {
            "topic":"AWS Cloud Practitioner exam",
            "category":"EC2",
            "question":"What type of service is EC2",
            "answer":"compute"
        },
        {
            "topic":"AWS Cloud Practitioner exam",
            "category":"EC2",
            "question":"what does EC2 stand for",
            "answer":"Elastic Cloud Compute"
        }
    ]
};

function createUniqueTopicsArrayOLD(ary){
    temp_array = [];
    ary.forEach(element => function(){
        console.log(element['topic'])
        if(!temp_array[element['topic']]){
            temp_array.append(element['topic'])
        }
    });
    return temp_array;
}

function createUniqueTopicsArray(ary){
    temp_array = [];
    for(item in ary){
        if(!temp_array[item['topic']]){
            temp_array.push(item['topic'])
        }
    }
    return temp_array
    }

function addOptionToSelectBox(item, selectBoxId){
    $("#"+selectBoxId).append("<option value='"+item,"'>"+item+"</option>")

}

help = 'me'