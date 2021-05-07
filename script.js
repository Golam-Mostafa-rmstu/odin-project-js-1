let books = [];
class Book{
    constructor(title, author, page, status){
        this.title = title.value;
        this.author = author.value;
        this.page = page.value;
        this.status = status;
    }
}


let form = document.querySelector('#form');
let usrTitle = document.querySelector('#title');
let usrAuthor = document.querySelector('#author-name');
let usrPage = document.querySelector('#pages');;
let btn = document.querySelector('#submit');
let cards = document.querySelector('.cards');
let yes = document.querySelectorAll("button[value='yes']");
let no = document.querySelector("button[value ='no']");
let read = document.querySelectorAll('.button')
let yesNo;
function restore(){
    let items = localStorage.getItem('myBook');
    items = JSON.parse(items);
    for(let i = 0; i < items.length; i++){
        createElement(items[i]);
        books.push(items[i]);
    }
}

//create all card element of a book
function createElement(book){
    let card = document.createElement('div');
    card.className = 'card';

    let title = document.createElement('h2');
    title.innerText = "Title: " + book.title;

    let authorName = document.createElement('h3');
    authorName.innerText = "Author: " + book.author;

    let pageNumber = document.createElement('h3');
    pageNumber.innerText = "Pages: " + book.page;

    let read = document.createElement('p');
    read.innerText = "Read: " + book.status;

    // let btnRemove = document.createElement('button');
    // btnRemove.className = "btnRemove";
    // btnRemove.innerText = "Remove";
    // removeBtns.push(btnRemove);
    // console.log(title, authorName, pageNumber,read,card);
    formStructur(title, authorName, pageNumber, read, card);

    //remove book from book-self
}

// new div under book-info
function formStructur(title, authorName, pageNumber, read, card){
    card.appendChild(title);
    card.appendChild(authorName);
    card.appendChild(pageNumber);
    card.appendChild(read);
    // card.appendChild(btn)
    cards.appendChild(card);
}

function removeBook(removeBtns){
    // console.log(removeBtns);
    for(let i = 0; i < removeBtns.length; i++){
        removeBtns[i].addEventListener('click',()=>{
            removeBtns[i].parentElement.remove();
        })
    }
}
//read or not
for(let i = 0; i < read.length; i++){
    // console.log(read[i].innerHTML);
    read[i].addEventListener('click', (e)=>{
        e.preventDefault();
        yesNo = read[i];
        read[i].style.background = 'green';
        read[i].style.color = 'white';
    })
}

//addClick
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log(usrAuthor);
    if(usrPage.value && usrAuthor.value  && usrTitle.value){
        const newBook = new Book(usrTitle, usrAuthor, usrPage, yesNo.innerHTML);
        books.push(newBook);
        localStorage.setItem('myBook', JSON.stringify(books));
        createElement(newBook);
    }
    else alert('Fill out the input section');
    
    for(let i = 0; i < read.length; i++){
        read[i].style.background = '';
        read[i].style.color = '';
    }
})

restore();
