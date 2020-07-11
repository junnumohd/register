import 'bootstrap/dist/css/bootstrap.css'
import '../css/user.css';
import $ from 'jquery'

document.addEventListener('DOMContentLoaded',function(){
	 user1();

})

function user1(){
	 var url = "http://localhost:3000/users";
    fetch(url).then(function(response){	
        return response.json();
    }).then(function(data){	
        populateManageData(data)
    });

}
function populateManageData(data){
	$("#rows").html('');
	data.forEach( function(obj) {
		var row = tableTamplate(obj)
		$("#rows").append(row);
	});

}
export function deleteRow(id){
	var url = `http://localhost:3000/users/${id}`;
    fetch(url,{
    	method: 'DELETE'
    }).then(function(response){
    	user1();
    })
}
export function editRow(id){
	alert(id)
}
function tableTamplate(obj){
	var rowsTamplate =`
		<tr>
			<td>${obj.firstName}</td>
			<td>${obj.lastName}</td>
			<td>${obj.age}</td>
			<td>${obj.gender}</td>
			<td>${obj.hobbies}</td>
			<td>${obj.feedback}</td>
			<td><a href="#" onclick="users1.deleteRow(${obj.id})">Delete</a></td>
			<td><a href="#" onclick="users1.editRow(${obj.id})">edit</a></td>
		</tr>
		`
		return rowsTamplate;
}
