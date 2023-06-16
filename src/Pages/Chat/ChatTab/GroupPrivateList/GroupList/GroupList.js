import './GroupList.css';
import GroupPrivateItem from "./GroupPrivateItem/GroupPrivateItem";
import SearchBar from "../../../../Helper/SearchBar/SearchBar";
import ChangeCategory from "../../../../Helper/ChangeCategory/ChangeCategory";
import {useSelector} from "react-redux";

const GroupList = () => {
    const groupList = useSelector(state => state.user.groupList);
    return (
        <>
            <ChangeCategory/>
            <SearchBar/>
            <div className="group-private-list">
                {groupList.map(result=> <GroupPrivateItem result={result}/>)}
            </div>
        </>

    );
};

export default GroupList;