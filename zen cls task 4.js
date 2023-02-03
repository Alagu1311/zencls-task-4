let obj1={name:"person1",age:25};
let obj2={age:25,name:"person1"};
let obj1keys = Object.keys[obj1];
let obj2keys = Object.keys[obj2];
let obj1values = Object.values[obj1];
let obj2values = Object.values[obj2];
console.log(_.isEqualto(obj1keys,obj2keys));






let xhr = "https://restcountries.com/v3.1/all";
xhr.oprend("GET","https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = function(){
    const flags = JSON.parse(xhr.response)
    const region =JSON.parse(xhr.response)
    const population =JSON(xhr.response)
    const subregion = JSON(xhr.response)
    const names = JSON(xhr.response)
    console.log(flags,region,population,subregion,names);
    console.log(xhr.status);
}
