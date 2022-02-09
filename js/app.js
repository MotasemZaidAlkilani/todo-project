let name =prompt("Enter your name");
while(name == ""){
  alert("Invalid name");
  name =prompt("Enter your name again");
}
let gender=prompt("Enter your gender?(male/female)");
while((gender !="male") && (gender !="female" )){
  alert("Invalid gender");
   gender=prompt("Enter your gender again?(male/female)");
}
let age=prompt("Enter your age");
while(age<=0){
  alert("age is uncurrect")
   age=prompt("Enter your age again");
}

let marriage_status_var=prompt("are u single ? (yes/no)");
let country_var=prompt("country u live ?");
let city_var=prompt("city u live ?");
let array=[name,gender,age,marriage_status(marriage_status_var),country(country_var),city(city_var)];
let welcome_message=confirm("do u want to skip welcome message ?");










if(welcome_message===true){
alert("Goodbye");
}

else if(welcome_message===false){
    if(gender==="Male"){
    alert("hello Mr "+name);}

    else if(gender==="female"){
        alert("hello Ms "+name);
        }
       
        
}

  console.log(array);


function marriage_status(marriage_status_var){
  
  if(marriage_status_var =="yes"){
    result="single";
  }
  else if(marriage_status_var =="no"){
    result="married";
  }
  else{
    result="invalid";
  }
return result;
}

function country(country_variable){
  if(country_variable ===null){
    return "invalid";
  }
  else{
    return country_variable;
  }
  
}
function city(city_variable){
  if(city_variable ===""){
    city_variable="invalid";
  }
  return city_variable;
}