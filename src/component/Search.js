import React from "react";
import './Search.css';

function Search() {
    return (
        <div className = "search">
        <form className = "search-box" action = "" method = "get">
            <input className = "search-txt" type = "text" placeholder="  관심분야의 키워드를 입력해주세요."></input>
            <button className = "search-btn" type = "submit"></button>
        </form>
        <img className = "search-icon" src = '/searchIcon.png' alt = 'Search Icon'></img>
    </div>
    );
    
}

export default Search;