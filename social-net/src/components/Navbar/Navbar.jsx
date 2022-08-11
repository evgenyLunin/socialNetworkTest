import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={`${s.item} ${s.active}`}>
      <Link to="/profile"> Profile</Link>
    </div>
    <div className={s.item}>
      <Link to="/messages"> Messages</Link>
    </div>
    <div className={s.item}>
      <Link to="/news"> News</Link>
    </div>
    <div className={s.item}>
      <Link to="/music"> Music</Link>
    </div>
    <div className={s.item}>
      <Link to="/settings"> Settings</Link>
    </div>
    <div className={s.itemF}>
      <Link to="/Users"> Users </Link>
      {/* <div> FriendsList </div> */}
    </div>
  </nav>
}

export default Navbar;