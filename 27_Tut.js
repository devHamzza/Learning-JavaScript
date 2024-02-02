// ---------  Prompt Confirm Alert  ---------//
alert('You must need to Enter the Value of A first');
let a = prompt('Enter the value of A here', '675')
a = Number.parseInt(a);
alert('You have entered a of type: ' + (typeof a));
let write = confirm('Do You Want to write it to the page');

if(write == true){
    document.write(a);
}

else{
    document.write("Not Allowed");
}
