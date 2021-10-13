let books = [
    {
        name: "Harry Potter and the Philosopher's Stone",
        image: "harry-1",
        author: "J.K. Rowling",
        price: "$5.89 - $26.99"
    },

    {
        name: "Harry Potter and the Chamber of Secrets",
        image: "harry-2",
        author: "J.K. Rowling",
        price: "$15.59 - $29.50"
    },

    {
        name: "Harry Potter and the Prisoner of Azkaban",
        image: "harry-3",
        author: "J.K. Rowling",
        price: "$15.70 - $68.29"
    },

    {
        name: " Harry Potter and the Goblet of Fire",
        image: "harry-4",
        author: "J.K. Rowling",
        price: "$5.89 - $54.99"
    },

    {
        name: "Harry Potter and the Order of the Phoenix",
        image: "harry-5",
        author: "J.K. Rowling",
        price: "$6.49 - $54.99" 
    },

    {
        name: "Harry Potter and the Half-Blood Prince",
        image: "harry-6",
        author: "J.K. Rowling",
        price: "$5.59 - $54.99" 
    },

    {
        name: "Harry Potter and the Deathly Hallows",
        image: "harry-7",
        author: "J.K. Rowling",
        price: "$5.99 - $68.29" 
    },

    {
        name: "The Stories of Vladimir Nabokov",
        image: "novel-8",
        author: "Vladimir Nabokov",
        price: "$5.99 - $68.29"  
    },

    {
        name: "Laughter in the Dark",
        image: "novel-9",
        author: "Vladimir Nabokov",
        price: "$5.59 - $54.99"
    },

    {
        name: "Despair",
        image: "novel-10",
        author: "Vladimir Nabokov",
        price: "$15.70 - $68.29"
    },

    {
        name: "Bend Sinister",
        image: "novel-11",
        author: "Vladimir Nabokov",
        price: "$15.70 - $68.29" 
    },

    {
        name: "Transparent Things",
        image: "novel-12",
        author: "Vladimir Nabokov",
        price: "$15.70 - $68.29"
    }
]


console.log("Daily Tuition", books. length)


// books.forEach(element => {
//     console.log(element)
// } );
let dailysection = document.getElementById("books-wrapper");
let html = "";
books.forEach(e => {
    html += `
    <div class="col-lg-4 col-md-4 col-sm-12">
    <div class="card m-3">
      <img src="img/${e.image}.jpg" class="img-fluid" alt="">
      <div class="card-body bg-transparent">
        <h4 class="text-success">${e.name}</h4>
        <h5>${e.author}</h5>
        <h3 class="text-danger">${e.price}</h3>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-section">
            <button type="button" class="btn btn-sm btn-outline-secondary">Purcharse</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

    `
    
    console.log(e)

    dailysection.innerHTML = html
    
})