const API = "http://localhost:3000";

let page = 1;

function displayBooks(books){

    const div = document.getElementById("books");
    div.innerHTML = "";

    books.forEach(book => {

        div.innerHTML += `
        <div class="book">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Category: ${book.category}</p>
        <p>Price: ₹${book.price}</p>
        <p>Rating: ${book.rating}</p>
        </div>
        `;
    });
}


// SEARCH
async function searchBooks(){

    const title = document.getElementById("searchTitle").value;

    const res = await fetch(`${API}/books/search?title=${title}`);
    const books = await res.json();

    displayBooks(books);
}


// FILTER
async function filterCategory(){

    const cat = document.getElementById("category").value;

    const res = await fetch(`${API}/books/category/${cat}`);
    const books = await res.json();

    displayBooks(books);
}


// SORT PRICE
async function sortPrice(){

    const res = await fetch(`${API}/books/sort/price`);
    const books = await res.json();

    displayBooks(books);
}


// SORT RATING
async function sortRating(){

    const res = await fetch(`${API}/books/sort/rating`);
    const books = await res.json();

    displayBooks(books);
}


// TOP BOOKS
async function topBooks(){

    const res = await fetch(`${API}/books/top`);
    const books = await res.json();

    displayBooks(books);
}


// PAGINATION
async function loadMore(){

    const res = await fetch(`${API}/books?page=${page}`);
    const books = await res.json();

    const div = document.getElementById("books");

    books.forEach(book => {

        div.innerHTML += `
        <div class="book">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.category}</p>
        <p>₹${book.price}</p>
        <p>Rating: ${book.rating}</p>
        </div>
        `;
    });

    page++;
}

loadMore();