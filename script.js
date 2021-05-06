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
let read = document.querySelectorAll('.button');
let removeBtns = [];
let id = 0;
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
    read.innerText = "Read: " + yesNo.innerHTML;
    yesNo.style.background = "";
    yesNo.style.color = "";
    yesNo.innerHTML.value = "";

    let btnRemove = document.createElement('button');
    btnRemove.className = "btnRemove";
    btnRemove.innerText = "Remove";
    btnRemove.value = id++;
    removeBtns.push(btnRemove);

    formStructur(title, authorName, pageNumber, read, btnRemove, card);

    //remove book from book-self
    removeBook(removeBtns);
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
        createElement(yesNo);
    }
    else alert('Fill out the input section');
    
})

