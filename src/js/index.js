import '../css/style.css';


document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById('inputButton');
    button.addEventListener('click',function(){
        saveChanges();
    })
})

function saveChanges(){
    var firstNameInput = document.getElementById('firstName');

    var firstName = firstNameInput.value;
    var lastNameInput = document.getElementById('lastName');
    var lastName = lastNameInput.value;


    var ageInput = document.getElementById('age');
    var age = ageInput.value;

    var feedbackInput = document.getElementById('feedback');
    var feedback = feedbackInput.value;
    var collegeInput = document.getElementById('college');
    var college = collegeInput.value;
    var radioInputs = document.getElementsByName('gender')// []
    var gender = ''
    for (let i = 0; i < radioInputs.length; i++) {
        if(radioInputs[i].checked){
            gender = radioInputs[i].value
        }
    }

    var hobbies = [];
    var hobbiesInputs = document.getElementsByName('hobby')// []
    for (let i = 0; i < hobbiesInputs.length; i++) {
        if(hobbiesInputs[i].checked){
            hobbies.push(hobbiesInputs[i].value)
        }
    }
    var data = {};
    data.firstName = firstName;
    data.lastName = lastName;
    data.gender = gender;
    data.college = college;
    data.hobbies = hobbies;
    data.age = age;
    var url = "https://my-json-server.typicode.com/junnumohd/register/users";
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
}

