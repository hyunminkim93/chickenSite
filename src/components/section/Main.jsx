import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import '../../assets/scss/section/layout.scss'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | Chicken"
                defaultTitle="Chicken Brand"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <section className='banner'>
                <article>
                    <span>당신이 찾던 치킨 브랜드,</span>
                    <p><em>치킨</em> 선택을 도와드립니다!</p>
                </article>
            </section>

            <main id="main" role="main">
                {props.children}
            </main>
        </HelmetProvider>
    )
}

export default Main