
function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
    shelfArray.unshift(book);
    return shelfArray
  }
}

function unshelfBook(removedBookName, shelfArray) {
  for (var i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === removedBookName){
      shelfArray.splice(i, 1)
      }
    }
  return shelfArray
  }

function listTitles(shelfArray) {
  var arrayListOfTitles = [];
    for (var i = 0; i < shelfArray.length; i++){
      arrayListOfTitles.push(shelfArray[i].title)
    }
  var textListOfTitles = arrayListOfTitles.join(", ")
  return textListOfTitles
}

function searchShelf(shelfArray, bookTitle) {
arrayListOfTitles = [];
  for (var i = 0; i < shelfArray.length; i++){
    arrayListOfTitles.push(shelfArray[i].title)
  }
if (arrayListOfTitles.includes(bookTitle)){
  return true
  } else {
  return false
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
