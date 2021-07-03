
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#Email');
let form = document.querySelector('.forms');

form.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/formData', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: fname.value,
            lname: lname.vaue,
            email: email.value
        })
    }).then((response)=>response.text()).then((data)=>window.history.go());

})
