import React, { Fragment, useEffect, useState } from 'react';
import chicken60data from '../data/chickenlist-main/60chicken/60chicken_2024-05-27.json';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(chicken60data);
    }, []);

    return (
        <div>
            <h1 className='menu__title'>
                60계치킨
            </h1>
            <div className='chiken'>
                {data.map((item, key) => (
                    <Fragment key={key}>
                        <ul className='menu__chiken'>
                            <li className='menu__img'><img src={item.MenuImage} alt={item.Menu} /></li>
                            <div className='menu__list'>
                                <li className='tit'>메뉴 : <span>{item.Menu}</span></li>
                                <li className='sub'>부가설명 : {item.Sub}</li>
                                <li className='pic'>가격 : {item.Price}</li>
                            </div>

                        </ul>

                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Atteck