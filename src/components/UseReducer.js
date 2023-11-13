import { useReducer } from "react"

const reducer = (state, action) => {
    if(action.type === "setImage"){
        return action.date
    }
    else {
        return state
    }
}

const UseReducer = () => {
    const [state , setstate] = useReducer(reducer,
        {
            image : "",
            name : "",
            city : ""
        } )
  return (
    <div>
        <input type="text"  placeholder="image url" value={state.image} onChange={(e)=> setstate({
            type: "setImage",
            date : e.target.value
        })}/>
        <input type="text" placeholder="Name" value={state.name} onChange={(e)=> setstate({
            type: "setName",
            date : e.target.value
        })}/>
        <input type="text" placeholder="City" value={state.city} onChange={(e)=> setstate({
            type: "setCity",
            date : e.target.value
        })}/>
        <button>clk here</button>
    </div>
  )
}

export default UseReducer