import React from 'react';
import ReactDOM from 'react-dom';

// data
import { books } from './Books';
import Book from './Book';

// css
import './index.css'

// setup vars ||varibles



function BookList() {
  return (
    <section>
      {books.map((book) => {
        // const {img, title, author} = book;
        return (
          <Book key={book.id} {...book}>
            <p>childressssss</p>
          </Book>
        );
      })}
      
    </section>
  )
}



// // 2nd component
// // implicit return
// const Image = () => <img className='img' src='https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL906_SR906,200_.jpg' alt=''></img>

// // 3nd component
// const Title = () => <h1>It's Not Easy Being a Bunny (Beginner Books(R))</h1>

// // 4th component
// const Author = () => <h3 style={{color:'blue'}}>Marilyn Sadler</h3>

ReactDOM.render(<BookList />, document.getElementById('root'))