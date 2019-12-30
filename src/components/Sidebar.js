import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../data/navigation';

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar__logo">
                    <h1>{this.props.title}</h1>
                </div>

                {navigation.map( menu =>
                    <nav key={menu.name} className="sidebar__nav">
                        <h2 className="sidebar__subheading uppercase">{menu.name}</h2>
                        <ul className="sidebar__list">
                            {menu.links.map( link =>
                                <li key={link.name} className="sidebar__list-item">
                                    <NavLink activeClassName="active" className="sidebar__list-link uppercase" to={link.url}>{link.name}</NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                )}
            </aside>
        );
    }
}

export default Sidebar;
