import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';

function App() {

  //Vars
  const [ counter, setCounter ] = useState( 0 );

  // const Person = (props) => {
  //   return(
  //     <>
  //       <h1>First Name: {props.name}</h1>
  //       <h2>Last Name: {props.lastName}</h2>
  //       <h2>Age: {props.age}</h2>
  //       </>
  //   )
  // }

  useEffect(() => {
    // alert('reload');
  }, [] );
 
  return (
    <div className="App">
      <button onClick={ () => setCounter( (prevCount) =>  prevCount - 1 ) }>-</button>
      <h1>{counter}</h1>
      <button onClick={ () => setCounter( (prevCount) =>  prevCount + 1 ) }>+</button>
    </div>
  );

  // return (
  //   <div className="App">
  //     <Person name={'John'} lastName={'Doe'} age={'30'}/>
  //     <Person/>
  //   </div>
  // );
}

export default App;
