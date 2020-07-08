import '../css/user.css';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', function(){
    fetchUsers()
})

function fetchUsers(){
    var url = "http://localhost:3000/users";
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        populateDataJquery(data)
    });
}
function populateDataJquery(data){
	data.forEach(function(obj){
		$("#rows").append(tableTemplate(obj));	
	})
}

function tableTemplate(obj){
	var rowTemplate = `
		<tr>
			<td>${obj.firstName}</td>
			<td>${obj.lastName}</td>
			<td>${obj.age}</td>
			<td>${obj.gender}</td>
			<td>${obj.hobbies}</td>
			<td><a href="#">Delete</a></td>
		</tr>
	`
	return rowTemplate;
}
function populateData(data){
	console.log(data);
	var tbody = document.getElementById('rows')
	var finalHtml = '';
	for (var i = 0 ; i < data.length ; i++) {
		var template = tableTemplate(data[i])
		finalHtml = finalHtml + template
	}
	tbody.innerHTML = finalHtml;	
}