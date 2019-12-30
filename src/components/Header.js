import React from 'react';

const Header = (props) => (
    <header className="header flex justify-content--between align-items--center">
        <h1 className="header__logo">{props.title}</h1>
    </header>
)

export default Header;
