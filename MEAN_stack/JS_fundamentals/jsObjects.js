let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function showStudents(students){
    for (student in students){
        console.log("Name:", students[student].name + ", Cohort:",students[student].cohort)
    }
}
showStudents(students)

console.log()

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function showUsers(users){
    for (type in users){
        console.log(type.toUpperCase())
        for (user in users[type]){
            console.log(
                parseInt(user)+1,
                "-",
                users[type][user].last_name.toUpperCase() +
                ",",
                users[type][user].first_name.toUpperCase(),
                "-",
                users[type][user].last_name.length + users[type][user].first_name.length
            )
        }
    }
}

showUsers(users)