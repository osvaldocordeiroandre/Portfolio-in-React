import './headers.css';
import { useState } from 'react';

function Header() {
    const [active, setMode] = useState(false);
    const ToggleMode = () =>{
        setMode(!active)
    }
    return (

        <header>

            <a href=""><img className='logo' src='logo/logo.png' /></a>

            <div className='test'>
                <nav className={active ? 'menu menuOpen' : "menu menuClose"}>
                    <a target="_blank" className='ajuste' href="https://github.com/osvaldocordeiroandre">GITHUB</a>
                    <a target="_blank" className='ajuste' href="https://www.linkedin.com/in/ajk-009760231/">LINKEDIN</a>
                    <a target="_blank" className='ajuste' href="mailto:ajknew2022@gmail.com">EMAIL</a>
                </nav>
                <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
            </div>

        </header>

    )
}

export default Header;