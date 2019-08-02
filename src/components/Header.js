import React from 'react';

const Header = (props, {
    title="React App"
}) => (
    <header className="header flex justify-content--between align-items--center">
        <h1 className="header__logo">{title}</h1>
        <div className="header__search">
            <form>
                <input className="input text" name="Search" type="text" placeholder="Search"/>
                <label>Search</label>
            </form>
        </div>
    </header>
)

export default Header;
