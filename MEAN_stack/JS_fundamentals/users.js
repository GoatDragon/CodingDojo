users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

for (let i=0; i<users.length; i++){
  let phrase = users[i].fname + " " + users[i].lname + " knows "
  let phrase2 = users[i].fname + " " + users[i].lname + " is also interested in "
  for (let j=0; j<users[i].languages.length; j++){
    phrase += users[i].languages[j]
    if (j<users[i].languages.length - 1){
      phrase += ", "
    }
    if (j == users[i].languages.length - 2){
      phrase += "and "
    }
  }
  for (interest in users[i].interests){
    phrase2 += users[i].interests[interest] + " "
    }
  console.log(phrase)
  console.log(phrase2)
}