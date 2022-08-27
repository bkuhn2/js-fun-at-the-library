function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
}

function addBook(library, book) {
  var genres = Object.keys(library.shelves);
//use a loop here instead of index numbers???
  if (book.genre === genres[0]) {
      library.shelves.fantasy.push(book)
    } else if (book.genre === genres[1]) {
      library.shelves.fiction.push(book)
    } else if (book.genre === genres[2]) {
      library.shelves.nonFiction.push(book)
    }
}

function checkoutBook(library, book, genreShelf) {
  var totalBookList = [];
  for (var i = 0; i < library.shelves.fantasy.length; i++){
    totalBookList.push(library.shelves.fantasy[i].title)
  }
  for (var i = 0; i < library.shelves.fiction.length; i++){
    totalBookList.push(library.shelves.fiction[i].title)
  }
  for (var i = 0; i < library.shelves.nonFiction.length; i++){
    totalBookList.push(library.shelves.nonFiction[i].title)
  }

  if (genreShelf === "fantasy") {
    for (var i = 0; i < library.shelves.fantasy.length; i++){
      if (library.shelves.fantasy[i].title === book) {
        library.shelves.fantasy.splice(i, 1);
        return `You have now checked out ${book} from the ${library.name}`
      }
    }
  } else if (genreShelf === "fiction"){
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === book) {
        library.shelves.fiction.splice(i, 1);
        return `You have now checked out ${book} from the ${library.name}`
      }
    }
  } else if (genreShelf === "nonFiction"){
    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction[i].title === book) {
        library.shelves.nonFiction.splice(i, 1);
        return `You have now checked out ${book} from the ${library.name}`
      }
    }
  }
//try to understand why when this was linked here it didn't work -- ask
  if (!totalBookList.includes(book)){
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }

}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
