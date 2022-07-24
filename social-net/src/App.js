import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsList from './components/FriendsList/FriendsList';
import MessagesContainer from './components/Messages/MessagesContainer';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/messages' element={<MessagesContainer store={props.store} />} />
            <Route path='/profile' element={<Profile store={props.store} />} />
            
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
