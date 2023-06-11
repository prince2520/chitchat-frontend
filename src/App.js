import './App.css';
import Authentication from "./Pages/Authentication/Authentication";
import Chat from "./Pages/Chat/Chat";
import {useSelector} from "react-redux";

function App() {
    return (
        <div className="App">
            <Chat/>
        </div>
    );
}

export default App;
