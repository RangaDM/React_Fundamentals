import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "setImage") {
    return { ...state, image: action.date };
  } else if (action.type === "setName") {
    return { ...state, name: action.date };
  } else if (action.type === "setCity") {
    return { ...state, city: action.date };
  } else if (action.type === "setArray") {
    return {
      ...state,
      dataArray: [
        ...state.dataArray,
        {
          image: action.data.image,
          name: action.data.name,
          city: action.data.city,
        },
      ],
    };
  }
  else {
    return state;
  }
};

const UseReducer = () => {
  const [state, setstate] = useReducer(reducer, {
    image: "",
    name: "",
    city: "",
    dataArray: [],
  });
    console.log(state);
  return (
    <div>
      <input
        type="text"
        placeholder="image url"
        value={state.image}
        onChange={(e) =>
          setstate({
            type: "setImage",
            date: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          setstate({
            type: "setName",
            date: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={state.city}
        onChange={(e) =>
          setstate({
            type: "setCity",
            date: e.target.value,
          })
        }
      />
      <button
        onClick={() => {
          setstate({
            type: "setArray",
            data: {
              image: state.image,
              name: state.name,
              city: state.city,
            },
          });
        }}
      >
        clk here
      </button>
    </div>
  );
};

export default UseReducer;
