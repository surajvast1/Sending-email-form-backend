const API_KEY = "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";

const sgmail = require('@sendgrid/mail');

sgmail.setApiKey(API_KEY)

const messsage = {
    // to:'srivastavashubham12003@gmail.com',
    //
    // {
    to:['srivastavashubham12003@gmail.com','srivastavashubham2003@gmail.com'],
    // }
    from:
    {
        name:'Shubham',
        email:'srivastavashubham2003@gmail.com' 
    },
    subject:'hello from shubham',
    text:'hello from shubham1',
    html:'<h1> hello from shubham2</h1>'
}


sgmail.send(messsage).then(response=>
    console.log("Email sent successfully"))
.catch(error=> console.log(error));
