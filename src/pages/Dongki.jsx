import React, { Fragment, useEffect, useState } from 'react';
import dongkidata from '../data/chickenlist-main/dongkiChicken/dongkiChicken_2024-05-27.json';
import defaultImage from '../assets/img/defaultck.jpg';
import Main from '../components/section/Main';

const Atteck = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dongkidata);
    }, []);

    return (
        <Main>
            <div className="container">
                <h1 className='menu__title'>
                    동키 치킨
                </h1>
                <div className='chiken'>
                    {data.map((item, key) => (
                        <Fragment key={key}>
                            <ul className='menu__chiken'>
                                <div className='menu__list'>
                                    <li className='menu__img'><img src={item.img || defaultImage} alt={item.Menu} /></li>
                                    <li className='tit'>메뉴 : <span>{item.Menu}</span></li>
                                    <li className='sub'>부가설명 : {item.Sub}</li>
                                    <li className='pic'>가격 : {item.Price}</li>
                                </div>

                            </ul>

                        </Fragment>
                    ))}
                </div>
            </div>
        </Main>
    )
}

export default Atteck
