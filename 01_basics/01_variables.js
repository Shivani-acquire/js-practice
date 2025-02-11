const accountId = 1234
let accountEmail = "abc@google.com"
var accountPassword = "password"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed assignment to constant variable

accountEmail = "abc@abc.com"
accountPassword = "my_password_01"
accountCity = "Indore"

// console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])