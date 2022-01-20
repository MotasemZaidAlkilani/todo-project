name =prompt("Enter your name");
gender=prompt("Enter your gender?(Male/Female)");
age=prompt("Enter your age");
if(age<=0){
  alert("age is uncurrect")
}
welcome_message=prompt("do u want to skip welcome message ?(y/n)");
if(welcome_message==='y'){
alert("Goodbye");
}
else if(welcome_message==='n'){
    if(gender==="Male"){
    alert("hello Mr "+name);
    }
    else if(gender==="Female"){
        alert("hello Ms "+name);
        }
        else{
            alert("");
        }
}
