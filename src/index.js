  import React from 'react'
  import ReactDOM from 'react-dom'
  const fname="Madeeha"; 
  const lname="Minhas"; 
  const series="Netflix series";
   var d=new Date();
   var newformat = d.getHours()  >= 12 ? 'PM' : 'AM';
   var hour=d.getHours();
   var hours=hour >= 12 ? hour-12 : hour;  
  ReactDOM.render( 
    <>

    <h1> {`Hello, My name is ${lname},${fname}`}</h1>
    <p>{`Todays date is ${d.getMonth()+1}/${d.getDate()} /${d.getFullYear() }`  }</p>
  <p>{`Current time is ${hours}:${d.getMinutes()}:${d.getSeconds()} ${newformat}`  }</p>
    {/*template literals */  } 
    
    <p>{`My first name is ${fname} and last name is ${lname}`}</p>
  <h1>Thapa Technical  {series}  Pick</h1>
  <p>List of 5 best series</p>
  <ol>
  <li>Dark </li>
  <li>Extra curricular</li>
  <li>My Holo Love</li>
   <li>My First-2 Love</li>
   <li>Mr. Robot</li>
  </ol>
  </>,
  document.getElementById("root"))




    
 