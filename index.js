/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person = {
  name: "Ghizlane",
  age: 30,
  city: "Salwa",
};
/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "Ghiza.essaidi@gmail.com";
console.log(person);
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const hasKey = (obj, key) => {
  return key in obj;
};
console.log(hasKey(person, "hobbies"));

/******************************
	Q4) Create a function that checks if all properties in an object have values
 (i.e., no properties are undefined or null).
- running the function on this object should return false
		const myObject = {
		  name: "John",
		  age: 30,
		  city: null,
		};
- running the function on this object should return true 
		const myObject = {
		  name: "John",
		  age: 30,
		  city: "Kuwait",
		};
        
********************************/

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
const checkObj = (Obj1) => {
  Obj1.forEach((e) => console.log(e.title));
};
checkObj(movies);

/******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
const checkCount = (Obj1) => {
  let count = 0;
  Obj1.forEach((e) => {
    if (e.year === 1994) {
      count++;
    }
  });
  return count;
};
console.log(checkCount(movies));

/******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
const modifMovie = (movies) => {
  const newMovies = movies.map((x) => {
    if (x[title] === "The Dark Knight") {
      x.genre = "Action/Drama";
    }
  });
};
