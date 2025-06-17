/*
TypeScript API Filtering

You are working on a fan website for Harry Potter enthusiasts. You have been given a task to create a 
functionality that lists Quidditch players from the Hogwarts houses.

In the TypeScript file, you have a program that performs a GET request on the route
https://coderbyte.com/api/challenges/json/quidditch-list that returns a list of Harry Potter characters with their details in JSON format. 

From this list, you should filter only those characters who played
Quidditch along with their houses and position, and print the final array as a JSON string.
*/





import fetch from 'node-fetch';

interface Character {
  name: string;
  house: string;
  playsQuidditch: boolean;
  position: string;
  quidditchYears: number[];
}

async function getQuidditchPlayers() {
  try {
    // const response = await fetch("https://coderbyte.com/api/challenges/json/quidditch-list");
    let response;
    const data: Character[] = await response.json();

    const quidditchPlayers = data
      .filter(character => character.playsQuidditch)
      .map(character => ({
        name: character.name,
        house: character.house,
        position: character.position
      }));

    console.log(JSON.stringify(quidditchPlayers, null, 2));
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

getQuidditchPlayers();