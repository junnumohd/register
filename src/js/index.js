import '../css/style.css';
import $ from "jquery";

document.addEventListener('DOMContentLoaded', function(){

    var button = document.getElementById('inputButton');
    // button.addEventListener('click',function(){
    //     saveChangesJquery();
    // })
})
function saveChangesJquery(){
	var firtName = $('input[name="firstName"]').val();
	var lastName = $('#lastName').val();
	var age = $('#age').val();
	var feedback = $('#feedback').val();
	var gender = $("input[name='gender']:checked").val();
	var college = $('#college').val();
	var hobbies = [];
	$('input[name="hobby"]:checked').each(function(){
		hobbies.push($(this).val())
	})
	var obj = {};
	obj.firstName = firtName;
	obj.lastName = lastName;
	obj.age = age;
	obj.gender = gender;
	obj.feedback = feedback;
	obj.college = college;
	obj.hobbies = hobbies;
	var url = "http://localhost:3000/users"
	fetch(url,{
		body: JSON.stringify(obj),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	});


}
export function saveChanges(){
    alert();
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
}
