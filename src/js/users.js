import 'bootstrap/dist/css/bootstrap.css'
import '../css/user.css';
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', function(){
    fetchUsers()
})
var view = "table"
function fetchUsers(){
    var url = "http://localhost:3000/users";
    fetch(url).then(function(response){	
        return response.json();
    }).then(function(data){	
        populateDataJquery(data)
    });
}
function populateDataJquery(data){
	$("#rows").html('');
	$("#boxes").html('');
	data.forEach(function(obj){
		if(view === 'table'){
			$("#table").show();
			$("#rows").append(tableTemplate(obj))
		}
		else{
			$("#table").hide();
			$("#boxes").append(boxTemplate(obj))
		}
	})
}
export function changeView(elem){
	view = $(elem).val();
	fetchUsers()
}

export function deleteRow(id){
	var url = `http://localhost:3000/users/${id}`;
    fetch(url, {
    	method: 'DELETE'
    }).then(function(response){
		 fetchUsers();   	
    })
}
export function editRow(id){
	alert(id)
}

function tableTemplate(obj){
	var rowTemplate = `
		<tr>
			<td>${obj.firstName}</td>
			<td>${obj.lastName}</td>
			<td>${obj.age}</td>
			<td>${obj.gender}</td>
			<td>${obj.hobbies}</td>
			<td><a href="#" onclick="users.deleteRow(${obj.id})">Delete</a></td>
			<td><a href="#" onclick="users.editRow(${obj.id})">edit</a></td>
		</tr>
	`
	return rowTemplate;
}
function boxTemplate(obj){
	var boxTemplate = `
		<div class="box shadow bg-white rounded">
			<div class="card-header">
				<b>${obj.firstName} ${obj.lastName}</b> 
				<a href="#" onclick="users.deleteRow(${obj.id})">Delete</a>
		  	</div>
		  	<div class="card-body">
				<div>Age: ${obj.age}</div>
				<div>College: ${obj.college}</div>
				<div>Hobbies: ${obj.hobbies}</div>
				<div>Gender: ${obj.gender}</div>
				<div>Feedback: ${obj.feedback}</div>
			</div>	
		</div>
	`
	return boxTemplate;
}
function populateData(data){
	console.log(data);
	var tbody = document.getElementById('rows');
	var finalHtml = '';
	for (var i = 0 ; i < data.length ; i++) {
		var template = tableTemplate(data[i])
		finalHtml = finalHtml + template
	}
	tbody.innerHTML = finalHtml;	
}