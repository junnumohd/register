import '../css/style.css';

document.addEventListener('DOMContentLoaded', function(){
    fetchUsers()
})

function fetchUsers(){
    var url = "http://localhost:3000/users";
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data)
    });
}