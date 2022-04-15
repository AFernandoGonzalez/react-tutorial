import React from 'react';
import ReactDOM from 'react-dom';

// css
import './index.css'

// setup vars ||varibles

// data
const firstBook = {
  img :'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL906_SR906,200_.jpg',
  author: "Marilyn Sadler" ,
  title: "It's Not Easy Being a Bunny ",
}

const secondBook = {
  img :'https://images-na.ssl-images-amazon.com/images/I/91xUsdujK3L._AC_UL906_SR906,600_.jpg',
  author: "Dav Pilkey" ,
  title: "Cat Kid Comic Club: On Purpose: A Graphic Novel (Cat Kid Comic Club #3): From the Creator of Dog Man ",
}


function BookList() {
  return (
    <section>
      <h1 className='center'>Book List</h1>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
        <p>This is a (children) from a book </p>
        <p>This is another (children) from a book </p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}></Book>
    </section>
  )
}


// 1st component
// explicit return
// a variable outside the function
// write parameters inside () = (props) = properties
const Book = ({img, title, author, children}) => {
  // // destructure : avoids repeating props multiple times
  // const {img, title, author} = props;
  // console.log(props);
  return <article className=' container center'>
    This is a book
    <img className='img' src={img} alt=''></img>
    <h1>{title}</h1>
    {/* we can invoke methods like //toUpperCase() */}
    <p>{author}</p>
   {/* <p>{let x = 6}</p> */}
   <p>${6 + 6}.00</p>
   {/* <p>{job}</p> */}
   {/* <p>{props.title}</p> */}
   {/* <p>{number}</p> */}
   {children}
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