/*
In: array of objects
Out: array of objects

Rules:
- resulting array only have movies that have titles and ids
- and each movie object only contains title and id key value pairs

Thinking in Abstractions:
- first we need to filter our the objects that have the keys title and id => filter
- Then only copy id and title key value pairs from them

AL:
- Iterate over the array
  - use Object.keys to check whether title and id are present
  - if they are we keep the object (element)
- Iterate over the filtered array
  - on each iteration
  - iterate over the keys of Object
  - and copy title and id key value pairs into a temporary obj
  - push that temp object into a new empty array
- return the result array
*/

function processReleaseData(data) {
  return data.filter(movie => movie.title && movie.id ).map(movie => {
    return {id: movie.id, title: movie.title};
  });
}


let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));








