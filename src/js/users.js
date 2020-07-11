import 'bootstrap/dist/css/bootstrap.css'
import '../css/user.css';
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', function(){
    fetchUsers('table')
})

function fetchUsers(selectType){
    var url = "http://localhost:3000/users";
    fetch(url).then(function(response){	
        return response.json();
    }).then(function(data){	
        populateDataJquery(data,selectType)
    });
}
function populateDataJquery(data, selectType){
	$("#rows").html('');
	$("#boxes").html('');
	data.forEach(function(obj){
		if(selectType === 'table'){
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
	var selectType = $(elem).val();
	fetchUsers(selectType)
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
		<div class="box">
			<div>Firstname: ${obj.firstName} <a href="#" onclick="users.deleteRow(${obj.id})">Delete</a></div>
			<div>Lastname: ${obj.lastName}</div>
			<div>Age: ${obj.age}</div>
			<div>College: ${obj.college}</div>
			<div>Hobbies: ${obj.hobbies}</div>
			<div>Gender: ${obj.gender}</div>
			<div>Feedback: ${obj.feedback}</div>
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