var pass = document.getElementById('password');
var btn = document.getElementById('toggleBtn');
btn.onclick = function() {
    if(pass.type == 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
};
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    var user = document.getElementById('username').value;
    if(user == 'abcd9200' && pass.value == 'zaid112233') {
        alert('Welcome!');
    } else {
        alert('Try again');
    }
};