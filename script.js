// submit
document.getElementById('submit').addEventListener('click', function(){
    alert('already submitted');
})
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('hello');
}) 

document.getElementById('submit').addEventListener('mouseover', function(){
    submit.style.backgroundColor = 'rgb(219, 159, 179)';
})
document.getElementById('submit').addEventListener('mouseout', function(){
    submit.style.backgroundColor = 'rgb(214, 30, 92)';
})
document.getElementById('submit').addEventListener('click',function(){
    console.log('already submitted');
}) 

// input fname
document.getElementById('fname').addEventListener('mouseover', function(){
    fname.style.backgroundColor = '#1900ff';
})

document.getElementById('fname').addEventListener('mouseout', function(){
    fname.style.backgroundColor = '#1d51a0'
})

document.getElementById('fname').addEventListener('focus',function(){
    console.log('input is focusd');
}) 

// input lname
document.getElementById('lname').addEventListener('mouseover', function(){
    lname.style.backgroundColor = 'rgb(218, 43, 224)';
})

document.getElementById('lname').addEventListener('mouseout', function(){
    lname.style.backgroundColor = 'rgb(114, 14, 160)';
})

// country
document.getElementById('country').addEventListener('mouseout', function(){
    country.style.backgroundColor = 'gray';
})

document.getElementById('country').addEventListener('mouseover', function(){
    country.style.backgroundColor = 'green';
})

document.getElementById('country').addEventListener('mousemove', function(){
    console.log('moves');
})

// label

document.getElementById('subject').addEventListener('mouseout', function(){
    subject.style.backgroundColor = '#8a7f1c';
})

document.getElementById('subject').addEventListener('mouseover', function(){
    subject.style.backgroundColor = 'hsl(54, 100%, 50%)';
})
  




