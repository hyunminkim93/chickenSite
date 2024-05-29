import React from 'react'
import { GiChicken } from 'react-icons/gi'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <a href="/">
                <em><GiChicken /></em>
                <span>치킨 브랜드 모음집</span>
            </a>
        </h1>
    )
}

export default Logo