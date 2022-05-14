import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <a href="/">
                        <div className='logo'>
                            <img src="https://img.icons8.com/cotton/344/restaurant--v3.png" alt="logo"></img>
                            <h1>ChurrasCalc</h1>
                        </div>
                    </a>
                    <a href="https://github.com/andersonlc2" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/andersonlc2</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;