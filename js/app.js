name =prompt("Enter your name");
while(name == ""){
  alert("Invalid name");
  name =prompt("Enter your name again");
}
gender=prompt("Enter your gender?(male/female)");
while((gender !="male") && (gender !="female" )){
  alert("Invalid gender");
  gender=prompt("Enter your gender again?(male/female)");
}
age=prompt("Enter your age");
while(age<=0){
  alert("age is uncurrect")
  age=prompt("Enter your age again");
}
marriage_status_var=prompt("are u single ? (yes/no)");
country_var=prompt("country u live ?");
city_var=prompt("city u live ?");
array=[marriage_status(marriage_status_var),country(country_var),city(city_var)];
welcome_message=confirm("do u want to skip welcome message ?");
if(welcome_message===true){
alert("Goodbye");
}
else {
    if(gender==="male"){
    alert("hello Mr "+name );
    }
    else if(gender==="female"){
        alert("hello Ms "+name);
        }
        for(var i=0;i<array.length;i++){
           console.log(array[i]);
        }
        
}

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
  if(country_variable ===""){
    country_variable="invalid";
  }
  return country;
}
function city(city_variable){
  if(city_variable ===""){
    city_variable="invalid";
  }
  return city_variable;
}