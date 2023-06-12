import './App.css';
import Chat from "./Pages/Chat/Chat";
import {Navigate, Route, Routes} from "react-router-dom";
import AuthContext from "./Context/auth";
import React, {useContext} from "react";
import Authentication from "./Pages/Authentication/Authentication";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import GroupPrivateList from "./Pages/Chat/ChatTab/GroupPrivateList/GroupPrivateList";
import EditProfile from "./Pages/Chat/ChatTab/EditProfile/EditProfile";
import JoinGroup from "./Pages/Chat/ChatTab/JoinGroup/JoinGroup";
import CreateGroup from "./Pages/Chat/ChatTab/CreateGroup/CreateGroup";
import AlertBox from "./Helper/AlertBox/AlertBox";
import {useSelector} from "react-redux";


function App() {
    const authCtx = useContext(AuthContext);
    const showAlertBox = useSelector(state=>state.alert.showAlertBox);

    return (
        <div className="App">
            {showAlertBox && <AlertBox/>}
            <Routes>
                {!authCtx?.isAuth && <Route path='/' element={<Authentication/>}>
                    <Route path='login' element={<Login/>}/>
                    <Route path='signup' element={<SignUp/>}/>
                    <Route path='' element={<Navigate to={'login'}/>}/>
                </Route>}
                {authCtx?.isAuth && <Route path='/chat' element={<Chat/>}>
                    <Route path='group-chat' element={<GroupPrivateList/>}/>
                    <Route path='edit-profile' element={<EditProfile/>}/>
                    <Route path='join-group' element={<JoinGroup/>}/>
                    <Route path='create-group' element={<CreateGroup/>}/>
                    <Route path='' element={<Navigate to={'group-chat'}/>}/>
                </Route>}
            </Routes>
        </div>
    );
}

export default App;
