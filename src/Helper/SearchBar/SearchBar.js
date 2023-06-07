import './SearchBar.css';
import {Icon} from "@iconify/react";
const SearchBar = () => {
    return(
        <div className="search-bar-container border">
            <input/>
            <Icon icon="material-symbols:search" style={{color:'var(--text)', fontSize:'2rem'}}/>
        </div>
    );
};

export default SearchBar;