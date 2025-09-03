const accountId = 12344;
// accountId = 123; not allowed;
console.log(accountId);

let accountEmail = "nidhi@gmail.com";
accountEmail = "nidhis@gmail.com";
console.log(accountEmail);

// let accountEmail = "123"; vraibales declrarion with same name using Let is not allowed.
console.log(accountEmail);


var accountPassword = "!23";
// console.log(accountPassword);
accountPassword="345";
// console.log(accoun/tPassword);

let accountName;
// console.log(accountName);


// to display the records data in a tabular form
console.table([accountId, accountEmail, accountPassword, accountName]);