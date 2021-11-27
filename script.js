function person(First_Name ,Last_Name,Office_Address){
    this.First_Name=First_Name,
    this.Last_Name=Last_Name,
    this.Office_Address=Office_Address
}

var Per1 = new person("Virat","Kohli","Mumbai");
var Per2 = new person("Mahendra Singh","Dhoni","Ranchi");
var Per3 = new person("Rayadu","Ambati","Hyderabad");


console.log("Person1:")
console.log("FirstName: " + Per1.First_Name)
console.log("LastName: " + Per1.Last_Name)
console.log("OfficeAddress: " + Per1.Office_Address)

console.log("Person2:")
console.log("FirstName: " + Per2.First_Name)
console.log("LastName: " + Per2.Last_Name)
console.log("OfficeAddress: " + Per2.Office_Address)

console.log("Person3:")
console.log("FirstName: " + Per3.First_Name)
console.log("LastName: " + Per3.Last_Name)
console.log("OfficeAddress: " + Per3.Office_Address)
