var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].name)
console.log(users[0].name)

for (user in users){
	console.log(users[user].name, '-', users[user].age)
}