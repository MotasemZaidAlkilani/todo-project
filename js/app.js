name =prompt("Enter your name");
gender=prompt("Enter your gender?(Male/Female)");
age=prompt("Enter your age");
if(age<=0){
  alert("age is uncurrect")
}
welcome_message=confirm("do u want to skip welcome message ?");
if(welcome_message===true){
alert("Goodbye");
}
else if(welcome_message===false){
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
