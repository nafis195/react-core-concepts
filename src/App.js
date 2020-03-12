import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students = ['Rafid', 'Tamim', 'Jasim', 'Saddam'];
  const products = [{name: 'Photoshop', price: '$99.99'},
                    {name: 'Illustrator', price: '$59.99'},
                    {name: 'Adobe XD', price: '$79.99'}]

  var person = {
    name: "Nafis Chowdhury",
    job: "student",
    location:"Santa Ana"
  }

  var style = {
    color:'goldenrod',
    backgroundColor:'slateblue'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <User></User>
        <ul>
          {
            students.map(student => <li>{student}</li>)
          }
          {
            products.map(pds => <li>{pds.name}</li>)
          }
        </ul>
          {
            products.map(pd => <Product product = {pd}></Product>)
          }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 style={style}>{person.name + " " + person.job}</h1>
          <h3 style={{backgroundColor:'cyan', color:'yellow'}}>{person.location}</h3>
        <p>My First React Project</p>
        <Person name = "Nafis Chowdhury" job = "student"></Person>
        <Person name = "Dipto Chowdhury" job = "teacher"></Person>
        <Person name = {students[0]} job = "assistant"></Person>
        <Person name = {students[1]} job = "specialists"></Person>

        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        </a>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: "5px solid red",
    margin: "20px"
  }
  return (
    <div style = {personStyle}>
      <h3>{props.name}</h3>
      <h5>{props.job} of the year</h5>
    </div>
  )
}


function User(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic User {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Product(props){
  const productStyle = {
    color: 'lightsalmon',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    float: 'left'
  }

  const {name, price} = props.product;

  return (
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
