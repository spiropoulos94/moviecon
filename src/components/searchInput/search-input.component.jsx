import React,{useState} from 'react';
import "./search-input.styles.scss";

const SearchInput = ({setContent, setSearchQuery}) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        setSearchQuery(inputValue)
        setContent("")
    }

    return (
        <div className="mt-5 search-input">
            <form onSubmit={handleSubmit} className="d-flex no-wrap">
                <input onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} className="form-control" type="search" placeholder="Type movie title..." aria-label="Search"/>
                <button className="btn" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchInput;
