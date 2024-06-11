import React from 'react';
import search_icon_light from '../../assets/test/search-w.png';
import search_icon_dark from '../../assets/test/search-b.png';
import toggle_light from '../../assets/test/night.png';
import toggle_dark from '../../assets/test/day.png';

import { GiChicken } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";

import { useTheme } from '../../context/ThemeContext'; // Context에서 제공하는 훅 임포트

const Header = () => {
    const { theme, setTheme } = useTheme(); // useTheme 훅을 사용하여 theme와 setTheme 접근

    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <header id='header' role='banner'>
            <div className="logo">
                <a href="/">
                    {theme === 'light' ? (
                        <GiChicken size={40} className='logo' />
                    ) : (
                        <GiChickenOven size={40} className='logo' />
                    )}
                    <span>Chicken House</span>

                </a>
            </div>
            <div className='search-box'>
                <input type="text" placeholder='찾으시는치킨있나요??' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" />
            </div>

            <img onClick={toggleMode} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
        </header>
    );
}

export default Header;