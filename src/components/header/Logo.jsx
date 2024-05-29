import React from 'react'
import { GiChicken } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            {/* Link 컴포넌트 사용 */}
            <Link to="/">
                <em><GiChicken /></em>
                <span>치킨 브랜드 모음집</span>
            </Link>
        </h1>
    )
}

export default Logo