document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click" , function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('passconfirm').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Password match!';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Password not match!';
    }
}

function loadFile(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};