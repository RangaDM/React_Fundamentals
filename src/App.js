/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Main from "./components/Main";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import States_learning from "./components/UseState";

const myObj = [
  { name: "kmk", city: "kolkata", address: "kolkata" },
  { name: "sdckmk", city: "kolkata", address: "kolkata" },
  { name: "kmkdvsd", city: "kolkataaa", address: "kolkata" },
];

function App() {
  return (
    <>
      {/* {myObj?.map((e,index)=>{
        return <Main key={index} name ={e.name} nagaraya={e.city}/>
      })}

      <States_learning/> */}

      {/* <UseEffect/> */}

      <UseReducer />

    </>
  );
}

export default App;
