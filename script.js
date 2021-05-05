// let myLibrary = ['book1', 'book2', 'book3', 'book4', 'book5', 'book6'];
// function Book(title, author, page, read){
//     this.title = title;
//     this.author = author;
//     this.page = page;
//     this.read = read;
//     this.info = function(){
//         return `${this.title} by 
//         ${this.author}, ${this.page} pages, ${this.read} yet`;
//     };
// }

// function addBookToLibrary(){
//     //do stuff here
// }
// function displayBook(){
//     //display book through loop
// }
// const theHobbit = new Book('Hobbit', 'H.R Jakaria',300, 'not');
// console.log(theHobbit.info());

let form = document.querySelector('#form');
let usrTitle = document.querySelector('#title');
let usrAuthor = document.querySelector('#author-name');
let usrPage = document.querySelector('#pages');;
let btn = document.querySelector('#submit');
let cards = document.querySelector('.cards');
let read = document.querySelectorAll('.button');
let btnRemove = document.querySelectorAll('.btnRemove');
let yesNo;

// console.log(btn);

//create all card element of a book
function createElement(yesNo){
    let card = document.createElement('div');
    card.className = 'card';

    let title = document.createElement('h2');
    title.innerText = "Title: " + usrTitle.value;
    usrTitle.value="";

    let authorName = document.createElement('h3');
    authorName.innerText = "Author: " + usrAuthor.value;
    usrAuthor.value = "";

    let pageNumber = document.createElement('h3');
    pageNumber.innerText = "Pages: " + usrPage.value;
    usrPage.value = "";

    let read = document.createElement('h3');
    read.innerText = "Read: " + yesNo;
    yesNo.value = "";

    let btnRemove = document.createElement('button');
    btnRemove.className = "btnRemove";
    btnRemove.innerText = "Remove";

    formStructur(title, authorName, pageNumber, read, btnRemove, card);
}

// new div under book-info
function formStructur(title, authorName, pageNumber, read, btn, card){
    card.appendChild(title);
    card.appendChild(authorName);
    card.appendChild(pageNumber);
    card.appendChild(read);
    card.appendChild(btn)
    cards.appendChild(card);
}

//read or not
for(let i = 0; i < read.length; i++){
    // console.log(read[i].innerHTML);
    read[i].addEventListener('click', (e)=>{
        e.preventDefault();
        yesNo = read[i].innerHTML;
    })
}

//addClick
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log(usrAuthor);
    if(usrPage.value && usrAuthor.value  && usrTitle.value)   createElement(yesNo);
    else alert('Fill out the input section')
})
