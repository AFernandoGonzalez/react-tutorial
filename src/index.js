import React from 'react';
import ReactDOM from 'react-dom';

// css
import './index.css'

// setup vars ||varibles
const author = "Marilyn Sadler" ;
const title = "It's Not Easy Being a Bunny (Beginner Books(R)";
const img = 'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL906_SR906,200_.jpg';

function BookList() {
  return (
    <section>
      <h1 className='center'>Book List</h1>
      <Book></Book>
    </section>
  )
}


// 1st component
// explicit return
// a variable outside the function

const Book = () => {
  return <article className=' container center'>
    This is a book
    <img className='img' src={img} alt=''></img>
    <h1>{title}</h1>
    {/* we can invoke methods like //toUpperCase() */}
    <h3>{author.toUpperCase()}</h3>
   {/* <p>{let x = 6}</p> */}
   <p>${6 + 6}.00</p>
  </article>
}

// // 2nd component
// // implicit return
// const Image = () => <img className='img' src='https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL906_SR906,200_.jpg' alt=''></img>

// // 3nd component
// const Title = () => <h1>It's Not Easy Being a Bunny (Beginner Books(R))</h1>

// // 4th component
// const Author = () => <h3 style={{color:'blue'}}>Marilyn Sadler</h3>

ReactDOM.render(<BookList />, document.getElementById('root'))