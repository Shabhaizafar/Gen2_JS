
// 1. **Basic Operations:**
//    - Create an array of objects representing books with properties like `title`, `author`, and `pages`. Print out details of each book.
//    - Add a new book object to the array.
//    - Remove a book from the array based on a certain condition (e.g., title matching).

let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224 }
];

// for (const iterator of books) {
//     console.log(iterator);
// }

// console.log(...books);

// books.push({title:prompt("Enter Book Name ; "),author : prompt("Name of Author :"),pages : +prompt("Enter total Pages No. : ")});
// console.log(...books);

var selection = "1984";
for (const i in books) {
    if(books[i].title==selection)
    {
        books.splice(i,1);
    }
}
console.log(...books)

// 2. **Sorting and Filtering:**
//    - Sort the array of books by `title` alphabetically.
//    - Sort the array of books by `pages` in descending order.
//    - Filter the books to create a new array containing only those written by a specific author.

// 3. **Access and Manipulation:**
//    - Access and print details of a specific book by its index in the array.
//    - Update the `pages` count of a book based on user input.

// 4. **Advanced Operations:**
//    - Calculate the total number of pages in the entire library (sum of all `pages` values).
//    - Find the book with the highest number of pages.
//    - Group books by their genre (if `genre` property exists) into separate arrays or objects.

// 5. **Input and Output Handling:**
//    - Read data for multiple books from a JSON file and populate the array of book objects.
//    - Write the current array of books back to a JSON file after making modifications.

// 6. **Error Handling and Validation:**
//    - Ensure that when adding or updating a book, all required fields (like `title`, `author`, `pages`) are provided and handle cases where they are missing or invalid.

// 7. **Iterative Operations:**
//    - Use `forEach`, `map`, `filter`, `reduce`, etc., to perform various operations on the array of books (e.g., calculate average number of pages, create a list of titles).

// 8. **Nested Objects:**
//    - If applicable, work with arrays of objects where each object itself contains arrays or objects (e.g., a library object with shelves containing books).

// 9. **Searching and Indexing:**
//    - Implement a function to search for a book by title and return its index in the array.
//    - Implement a binary search algorithm for books sorted by `pages`.

// 10. **Object Relationships:**
//     - Represent relationships between objects (e.g., authors having multiple books) and perform operations based on these relationships (e.g., list all books by a specific author).