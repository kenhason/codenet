ANSWER SCHEMA
{
    questionId: {type: String, default: ''},
    codes: {type: String, default: ''},
    testingResult: {type: Boolean, default: false}
}

QUESTION SCHEMA
{
    description: {type: String, default: ''},
    language: {type: String, default: 'Java'},
    category: {type: String, default: 'Algorithm'},
    price: {type: Number, default: 0},
    status: {type: Boolean, default: false}
}

GET     /api/answer
GET     /api/answer/:id
POST    /api/answer

GET     /api/question
GET     /api/question/:id
POST    /api/question