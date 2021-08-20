import React from 'react'
import bootstrap from 'bootstrap'
import '../uielements/mypage.css'
import testowe from '../uielements/testowa.jpg'
import { tekst, navar } from '../uielements/tekst'





const Main = () => {
    return (
        <div className="container">
            <body>
                <div className="MainDiv col-sm-6 col-md-5">

                    <img src={testowe} alt="jbzd"></img>
                    {tekst}
                    {navar}

                </div>
            </body>
        </div>
    )
}

export default Main
