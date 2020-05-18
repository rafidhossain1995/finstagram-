import React from "react"
import "../CSS/Header.css"

const Header = ()=>{
    return(
        <nav className ="Nav">
            <div className="menu">
                <div className="brand">
                    <a className="logo" href="/">
                        Instagram
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Header