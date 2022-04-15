// rafce
// We can have only 1 export default per file.
import React from 'react'

// 1st component
// explicit return
// a variable outside the function
// write parameters inside () = (props) = properties
const Book = ({img, title, author, children}) => {
  // // destructure : avoids repeating props multiple times
  // const {img, title, author, children} = props;
  // console.log(props);

  // atributes, eventHandler
  // onClick, onMouse
  // we can restup the onClick as a reference
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hi there');
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return <article className=' container center' onMouseOver={() => {
    console.log(title);
  }}>
    This is a book
    <img className='img' src={img} alt=''></img>
    {/* onClick inline function */}
    <h1 onClick={() => console.log(title)} >{title}</h1>
    {/* we can invoke methods like //toUpperCase() */}
    <p>{author}</p>
    {/* <p>{let x = 6}</p> */}
    <p>${6 + 6}.00</p>
    {/* <p>{job}</p> */}
    {/* <p>{props.title}</p> */}
    {/* <p>{number}</p> */}
    {children}
    <button type='button' onClick={clickHandler}>By Reference</button>
    <button type='button' onClick={() => complexExample(author)}>more comple example</button>
  
  </article>
}

export default Book
