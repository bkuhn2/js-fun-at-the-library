function createTitle(title) {
  var modifiedTitle = `The ${title}`
  return modifiedTitle
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter
}


function saveReview(review1, arrayForReviews) {
  if (!arrayForReviews.includes(review1)) {
      arrayForReviews.push(review1);
      return arrayForReviews
}
}


function calculatePageCount(title) {
  var pageCount = title.length*20
  return pageCount
}

function writeBook(bookTitle, mainCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book
}

function editBook(bookToEdit) {
  bookToEdit.pageCount = bookToEdit.pageCount * .75
  return bookToEdit
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
