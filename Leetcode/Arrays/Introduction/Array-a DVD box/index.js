/*
    Array - A DVD box?    
        Suppose you had a bunch of DVDs at home that you wanted to arrange neatly. 
        What would be the ideal choice for storing such a thing? You could find a cardboard 
        box (or some other box) big enough to arrange all of the DVDs neatly, right? 
        It's as simple as that. However, you might want to add a new DVD to the box, or you 
        might want to get rid of the old ones that you've watched a million times over in the past.
        An important consideration for this box would be that you would only place DVDs in it and 
        nothing else; you wouldn't place your clothes in it, for example. The box would contain 
        multiple items, but all of them would be of the same type. In this case, that type is DVD. 
        Items of the same type share properties. For DVDs, those properties include:

            -> All the DVDs would be inside a plastic cover.
            -> The cover would have the name of the movie, the cast, and all sorts of other details.
            -> All the covers would be of exactly the same size and would contain just one, and only
              one, DVD.
            
        You might not actually name the DVD box, but when you want your sister to fetch a DVD, 
        you'd tell her that the DVD is inside your "DVD box", and she would instantly know 
        where to find the box. This is a very simple yet realistic scenario that is easy to 
        understand and relate to. So, now let us move over to the world of computers and port 
        this example to programming.

            -> Movie: The Avengers
            -> Year: 2012
            -> Director: Joss Whedon
            -> Description: 
                The earths mightiest heroes must come together and lear to fight as a team
                if the ar going to save it.

        Suppose you were told that you needed to build some software to keep track of all the DVDs 
        in an inventory. This is the exact same scenario that we just described above, but on a much 
        larger scale. So let's imagine the DVD box as a virtual DVD library. For each DVD, you would 
        have certain properties that would be specific attributes of the movies themselves.

        In addition to the properties of a DVD, you're also told the maximum number of DVDs that 
        can be stored in the inventory. Obviously, you wouldn't want to store ancient movies from 
        the 1900s unless they were popular ones, right? Say you were told that the requirement is 
        to maintain a maximum inventory of just 100 DVDs. This is an important piece of information 
        because, without this, you wouldn't be able to find the perfectly sized box to fit all the 
        DVDs easily. How could we find a box of a particular size that would be able to fit a maximum 
        of 100 DVDs? Well, lucky for us, we don't need to physically find a cardboard box or 
        anything—there's a programming construct for this purpose. That programming construct is 
        known as an Array.

*/

class DVD {
  movie = "";
  year = 0;
  director = "";
  description = "";

  constructor(movie, year, director, description) {
    this.movie = movie;
    this.year = year;
    this.director = director;
    this.description = description;
  }

  toString() {
    return `${this.movie}, directed by ${this.director}, released in ${this.year}`;
  }
}

class DVDBox {
  dvds = [];

  getDvds() {
    // sort by movie titles
    return this.dvds.sort((a, b) => a.movie - b.movie);
  }

  addDvd(movie, year, director, description = "") {
    if (!movie || !year || !director || !description) return false;

    if (this.dvds.length === 100) return false;

    this.dvds.push(new DVD(movie, year, director, description));

    return true;
  }

  updateDvd(movieNametoSearch, movie, year, director, description = "") {
    if (!movieNametoSearch || !movie || !year || !director || !description)
      return false;

    if (this.dvds.length === 100) return false;

    //geit the index of the requested dvd the assign the values
    let index = this.dvds.findIndex(
      (item) => item.movie.toUpperCase() === movieNametoSearch.toUpperCase()
    );

    if (index < 0) return false;

    this.dvds[index] = new DVD(movie, year, dire, description);

    return true;
  }

  removeDvd(movie) {
    if (!movie) return false;

    if (this.dvds.length === 0) return false;

    //filter out the dvd we need tor remove then set the dvds with the rest
    let filteredDvds = this.dvds.filter(
      (item) => item.movie.toUpperCase() !== movie.toUpperCase()
    );

    this.dvds = filteredDvds;

    return true;
  }
}
