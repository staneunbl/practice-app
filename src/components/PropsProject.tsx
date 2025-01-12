import React, { useState } from "react"; // String literal expected.ts(1141)

function PropsProject() {
  const [message, setMessage] = useState<string>("");

  const [count2, setCount2] = useState(0);

  // defining props
  type CountProps = {
    count2: number;
    setCount2: React.Dispatch<React.SetStateAction<number>>;
  };

  //(to display message prop)
  const MessageDisplay = (props) => {
    return (
      <div>
        <p>{props.message}</p>
      </div>
    );
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // (to increment count)
  const CountingFunction = ({ count2, setCount2 }: CountProps) => {
    const handleIncrement = () => {
      setCount2(count2 + 1);
    };
    const handleDecrement = () => {
      setCount2(count2 - 1);
    };
    return (
      <div>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>

        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message"
          className="border p-2 rounded"
        />
        <MessageDisplay message={message} />
      </div>

      <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded-lg text-center">
        <h1 className="text-xl font-bold mb-4">Counter Example</h1>
        <div className="flex items-center justify-center space-x-4">
          <CountingFunction count2={count2} setCount2={setCount2} />

          <p className="text-lg font-semibold">Count: {count2}</p>
        </div>
      </div>
    </>
  );
}

export default PropsProject;

// import React, { useState } from "react"; // String literal expected.ts(1141)

// function PropsProject() {
//   const [message, setMessage] = useState<string>("");

//   const [count2, setCount2] = useState(0);

//   // defining props
//   type CountProps = {
//     count2: number;
//     setCount2: React.Dispatch<React.SetStateAction<number>>;
//   };

//   //(to display message prop)
//   const MessageDisplay = (props) => {
//     return (
//       <div>
//         <p>{props.message}</p>
//       </div>
//     );
//   };

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };

//   // (to increment count)
//   const CountingFunction = ({
//     count2,
//     setCount2,
//     isIncrement,
//   }: CountProps & { isIncrement: boolean }) => {
//     const handleChange = () => {
//       if (isIncrement) {
//         setCount2(count2 + 1); // Increment if true
//       } else {
//         setCount2(count2 - 1); // Decrement if false
//       }
//     };
//     return (
//       <div>
//         <button
//           onClick={handleChange}
//           className={`px-4 py-2 ${
//             isIncrement ? "bg-green-500" : "bg-red-500"
//           } text-white rounded hover:${
//             isIncrement ? "bg-green-600" : "bg-red-600"
//           }`}
//         >
//           {isIncrement ? "+" : "-"}
//         </button>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={handleChange}
//           placeholder="Type your message"
//           className="border p-2 rounded"
//         />
//         <MessageDisplay message={message} />
//       </div>

//       <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded-lg text-center">
//         <h1 className="text-xl font-bold mb-4">Counter Example</h1>
//         <div className="flex items-center justify-center space-x-4">
//           <CountingFunction
//             count2={count2}
//             setCount2={setCount2}
//             isIncrement={true}
//           />
//           <p className="text-lg font-semibold">Count: {count2}</p>
//           <CountingFunction
//             count2={count2}
//             setCount2={setCount2}
//             isIncrement={false}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default PropsProject;
