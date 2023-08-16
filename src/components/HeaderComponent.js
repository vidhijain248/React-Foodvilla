import React from 'react'

export const Title = () => {
    return (
        <a href="/">
            <img className="logo" alt="gadbad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKlx-0tKeMzx2RT0BvGPkY3g0AC6OlzAofA&usqp=CAU" />
        </a>
    );
}
const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent