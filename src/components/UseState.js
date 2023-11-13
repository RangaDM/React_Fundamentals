import React, { useState } from 'react'

// let name = "Ranga";

// const changename = () => {
//     name = "Dananjaya";
//     console.log(name);
// }   

function States_learning() {
  

    const[name , setName] = useState()

    const changename = ()=> {
        setName("Dananjaya")
        console.log("1 : " + name);
    }

    console.log("2 : " + name);

  return (
    <div>
        <h1>name : {name}</h1>

        <button onClick={changename}>Click me</button>
    </div>
  )
}

export default States_learning