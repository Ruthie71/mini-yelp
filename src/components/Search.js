import React, { useState } from "react";

const Search = ({ setQuery }) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input) return alert("Search cannot be empty");
        setQuery(input);
        setInput("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default Search;
