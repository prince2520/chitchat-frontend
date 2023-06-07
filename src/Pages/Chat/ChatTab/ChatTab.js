import './ChatTab.css';
import SearchBar from "../../../Helper/SearchBar/SearchBar";
import ChangeCategory from "../../../Helper/ChangeCategory/ChangeCategory";
import GroupPrivateList from "./GroupPrivateList/GroupPrivateList";
import MyProfile from "./MyProfile/MyProfile";
import CreateGroup from "./CreateGroup/CreateGroup";
import JoinGroup from "./JoinGroup/JoinGroup";
import EditProfile from "./EditProfile/EditProfile";

const ChatTab = () => {
    return (
        <div className="chat-tab">
            <MyProfile/>
            {/*<SearchBar/>
            <ChangeCategory/>
            <GroupPrivateList/>*/}
            <EditProfile/>
        </div>
    );
};

export default ChatTab;