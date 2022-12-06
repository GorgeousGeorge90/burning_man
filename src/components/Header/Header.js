import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import logo from './../../assets/img/logo.svg';

const Header = ()=> {
    return (<header>
            <div className={styles.container}>
                <nav>
                    <div className={styles.logo}>
                        <img src={logo} alt='pic'/>
                    </div>
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/'}>About</NavLink></li>
                        <li><NavLink to={'/'}>Tickets</NavLink></li>
                        <li><NavLink to={'/'}>Contacts</NavLink></li>
                    </ul>
                    <div className={styles.contact}>
                        <p>+1 893 839-23-64</p>
                    </div>
                </nav>
                <div className={styles.title}>
                    <div className={styles.additional}>
                        <h3>Not the event.The life</h3>
                    </div>
                    <div className={styles.main}>
                        <h1>Burning man</h1>
                    </div>
                    <div className={styles.btn}>
                        <button>
                            Book the tickets
                        </button>
                    </div>
                </div>
                </div>
        </header>)
}


export default Header