var eyore = {character: "Eyore"};
var heffalumps = {character: "Heffalumps"};
var kanga = {character: "Kanga"};
var owl = {character: "Owl"};
var christopher = {character: "Christopher Robin"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var piglet = {character: "Piglet"};
var winnie = {character: "Winnie the Pooh"};
var bees = {character: "Bees"};
var tigger = {character: "Tiger"};

eyore.east = heffalumps;
eyore.south = kanga;
kanga.north = eyore;
kanga.south = christopher;
owl.west = christopher;
owl.south = piglet;
christopher.north = kanga;
christopher.west = owl;
christopher.east = rabbit;
christopher.south = winnie;
rabbit.west = christopher;
rabbit.east = gopher;
rabbit.south = bees;
piglet.north = owl;
piglet.east = winnie;
winnie.north = christopher;
winnie.west = bees;
winnie.south = tigger;
winnie.east = piglet;
tigger.north = winnie;

var player = {
    location: winnie,
};

function move (direction){
    console.log(player.location.direction)
    if (direction === "north" && player.location.north != null){
        player.location = player.location.north
        console.log(player.location.character)
    }
    else if (direction === "south" && player.location.south != null){
        player.location = player.location.south
        console.log(player.location.character)
    }
   else if (direction === "east" && player.location.east != null){
        player.location = player.location.east
        console.log(player.location.character)
    }
    else if (direction === "west" && player.location.west != null){
        player.location = player.location.west
        console.log(player.location.character)
    }
    else{
        console.log("You may not go that way!")
    }
    }

move("east")