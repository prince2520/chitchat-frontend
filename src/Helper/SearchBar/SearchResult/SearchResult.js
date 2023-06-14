import './SearchResult.css';
import {Icon} from "@iconify/react";
import ImageContainer from "../../ImageContainer/ImageContainer";
const SearchResult = ({user}) => {
    return (
        <div className={'search-result-container border box-shadow'}>
            <div className={'search-image-container'}>
                <ImageContainer/>
            </div>
            <div className={'search-result-description'}>
                <span className={'username'}>Ashutosh</span>
                <span className={'status'}>I am using ChatApp!</span>
            </div>
            <div className={'search-result-join-btn'}>
                <Icon
                    style={{fontSize:"2.25rem", cursor:'pointer'}}
                    icon="subway:add" />
            </div>
        </div>

    );
};

export default SearchResult;