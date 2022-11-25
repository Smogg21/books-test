let myLibrary = [];



function book(Title, Author, Pages, Read){
    this.Title = Title
    this.Author = Author
    this.Pages = Pages
    this.Read = Read
    /*this.info = function() {
        return (Title + ", written by " + Author + ", has over " + Pages + ". It is currently " + Read);
    }*/
}



const theHobbit = new book("The Hobbit", "J.R.R Tolkien", "295 pages", "Read")
// console.log(theHobbit.info());

function addBookToLibrary (Title, Author, Pages, Read){
    let newBook = new book(Title, Author, Pages, Read);
    myLibrary.push(newBook);
}

function displayBooksOnPage() {

    const bookDisplay = document.querySelector(".bookDisplay")
    
    myLibrary.forEach(myLibrary =>{
        const card = document.createElement("div");
        card.classList.add("card");
        bookDisplay.appendChild(card);
        for (let key in myLibrary){
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    } )
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "Read");
