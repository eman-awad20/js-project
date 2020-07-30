let books = [
   {
      title: "book1",
      author: "John Doe",
      image: "images/book1-image.jpeg"
   },
   {
      title: "book2",
      author: "John Doe",
      image: "images/book1-image.jpeg"
   },
    {
      title: "book3",
      author: "John Doe",
      image: "https://damonza.com/wp-content/uploads/portfolio/nonfiction/Set%20For%20Life%202.jpg"
   },
    {
      title: "book4",
      author: "John Doe",
      image: "https://img.com/bookimg.jpeg"
   },
    {
      title: "book5",
      author: "John Doe",
      image: "https://img.com/bookimg.jpeg"
   }
];

function drawShelf (){
let shelvesCounter = Math.ceil(books.length / 4);  
let container = document.getElementsByClassName('container')[0];
let divShelfContainer = document.createElement("div");
divShelfContainer.className = "shelf-container";
container.innerHtml = divShelfContainer;
container.appendChild(divShelfContainer)

 
for(let i = 0; i<shelvesCounter; i++){
    let shelfDiv = document.createElement("div");
    shelfDiv.className = "shelf";
    divShelfContainer.innerHtml = shelfDiv;
    divShelfContainer.appendChild(shelfDiv);

    let shelfRow = document.getElementsByClassName('shelf')[i];
    for(let j = i * 4; (j < books.length && j < (4 * (i+1))); j++){
    let book = books[j];
    let bookDiv = document.createElement("div");
    bookDiv.className = "book-container";
        bookDiv.innerHTML = '<div class="book-description">'+ book.title + '<br>' + book.author +'</div>' + 
            '<div class="book-cover"> <img class="book-img" src="' + book.image + '"/> </div>' ;
    shelfRow.innerHtml = bookDiv;
    shelfRow.appendChild(bookDiv);    
    }
    }
}

function addBook(){
 let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookCover = document.getElementById('bookCover').value;
    
    if (bookTitle == null || bookTitle == ''){  
          return false;  
        }else if(bookAuthor == null || bookAuthor == ''){  
          return false;  
        } else if(bookCover == null || bookCover == ''){      
            return false;  
        }
    
    let book = {
        title: bookTitle,
        author: bookAuthor,
        image: bookCover
    };
    
    books.push(book);
    document.getElementsByClassName('shelf-container')[0].remove();
    
    document.getElementById('bookTitle').value = null;
    document.getElementById('bookAuthor').value = null;
    document.getElementById('bookCover').value = null;
    
    drawShelf();
}

