let signIn = document.querySelector('#sign-in');

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
let main = document.querySelector('#main');
let removeBtns = [];
// authentication
const firebaseConfig = {
    apiKey: "AIzaSyDOCj0tAhrHCpNHO97OEAMxDlmI7aZtcUQ",
    authDomain: "odin-library-9df09.firebaseapp.com",
    projectId: "odin-library-9df09",
    storageBucket: "odin-library-9df09.appspot.com",
    messagingSenderId: "777488559885",
    appId: "1:777488559885:web:645fec42437b3751d90a44",
    measurementId: "G-WTJJQ2HQYG"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


main.style.display = "none";
const provider = new firebase.auth.GoogleAuthProvider();

signIn.addEventListener('click', ()=>{
    // console.log('cliked');
    if(signIn.innerHTML === "Sign Out"){
        main.style.display = "none";
        signIn.innerHTML =  "Sign In";
    }
    else{
        // console.log(main);
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        main.style.display = 'flex';
        signIn.innerHTML = "Sign Out";
        // ...
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        });
    }
})
let books = [];
class Book{
    constructor(title, author, page, status){
        this.title = title.value;
        this.author = author.value;
        this.page = page.value;
        this.status = status;
    }
}
let old;
function restore(){
    let items = localStorage.getItem('myBook');
    items = JSON.parse(items);
    old = true;
    if(items !== null)
        for(let i = 0; i < items.length; i++){
            createElement(items[i], old);
            books.push(items[i]);
        }
}

//create all card element of a book
function createElement(book,old){
    usrAuthor.value = "";
    usrTitle.value = "";
    usrPage.value = "";

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

    let btnRemove;
    if(!old){
        btnRemove = document.createElement('button');
        btnRemove.className = "btnRemove";
        btnRemove.innerText = "Remove";
        removeBtns.push(btnRemove);
    }
    
    // console.log(title, authorName, pageNumber,read,card);
    formStructur(title, authorName, pageNumber, read, btnRemove, card);

    //remove book from book-self
}

// new div under book-info
function formStructur(title, authorName, pageNumber, read, btn, card){
    card.appendChild(title);
    card.appendChild(authorName);
    card.appendChild(pageNumber);
    card.appendChild(read);

    if(btn)card.appendChild(btn);

    cards.appendChild(card);
    removeButton()
}
function removeButton(){
    for(let i = 0; i < removeBtns.length; i++){
        removeBtns[i].addEventListener('click',()=>{
            log(removeBtns)
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
        old = false;
        createElement(newBook, old);
    }
    else alert('Fill out the input section');
    
    for(let i = 0; i < read.length; i++){
        read[i].style.background = '';
        read[i].style.color = '';
    }
})

restore();


