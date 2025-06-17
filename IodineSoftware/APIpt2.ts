/*
TypeScript API Filtering

You are working on a fan website for Harry Potter enthusiasts. You have been given a task to create a 
functionality that lists Quidditch players from the Hogwarts houses.

In the TypeScript file, you have a program that performs a GET request on the route
https://coderbyte.com/api/challenges/json/quidditch-list that returns a list of Harry Potter characters with their details in JSON format. 

From this list, you should filter only those characters who played
Quidditch along with their houses and position, and print the final array as a JSON string.
*/



/*
I get a list of players and their details. I'm going to filter out. OK remove the players who have a false value for plays Quidditch.
I'm going to transform the remaining list and for each character it's going to say the house they played for the position in return that as the final array as a JSON string
*/



import fetch from 'node-fetch';

interface Character {
  name: string;
  house: string;
  playsQuidditch: boolean;
  position: string;
  quidditchYears: number[];
}




async function quidditchPlayers() {
    let result = await fetch ("https://coderbyte.com/api/challenges/json/quidditch-list")
    
    

    let data: Character[] = await result.json()
    const reformattedArray = data
    .filter((obj) => obj.playsQuidditch == true)
    .map(({house, position}) => ({
        house, position
    }))

    return (JSON.stringify(reformattedArray, null, 2)) //dont even know what that does 
}




console.log(await quidditchPlayers())


