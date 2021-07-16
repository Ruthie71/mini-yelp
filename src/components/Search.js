// import React, { useState } from "react";
// import { TextField, Button } from '@material-ui/core'

// const Search = () => {
//     const [input, setInput] = useState("");

//     const handleChange = (event) => {
//         setInput(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!input) return alert("Search cannot be empty");
//         console.log(input)
//         // setQuery(input);
//         // setInput("");
//     };

//     return (
//         <div style={{margin: '100px auto', textAlign: 'center'}}>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     size='small'
//                     variant="outlined"
//                     value={input}
//                     onChange={handleChange}
//                     label="Search..."
//                 /> 
//                 <Button variant="contained" color="secondary" onClick={handleSubmit} >Submit</Button>
//             </form>
//         </div>
//     );
// };

// export default Search;
