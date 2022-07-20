import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsList from './components/FriendsList/FriendsList';


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/messages' element={<Messages state={props.state.messagesPage}
            dispatch={props.dispatch}
            newMessageText={props.newMessageText} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friendsList' element={<FriendsList state={props.state.sideBar} />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
