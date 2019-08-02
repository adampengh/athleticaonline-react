import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        const menus = [
            {
                name: "Navigation",
                links: [
                    {
                        name: "Dashboard",
                        url: "/"
                    },
                    {
                        name: "Athletes",
                        url: "/athletes"
                    },
                    {
                        name: "Evaluations",
                        url: "/evaluations"
                    },
                    {
                        name: "Treatments",
                        url: "/treatments"
                    }
                ]
            },
            {
                name: "Settings",
                links: [
                    {
                        name: "Settings",
                        url: "/settings"
                    },
                    {
                        name: "Users",
                        url: "/users"
                    }
                ]
            },
            {
                name: "Internal",
                links: [
                    {
                        name: "Styleguide",
                        url: "/styleguide"
                    }
                ]
            }
        ];

        return (
            <aside className="sidebar">
                {menus.map( menu =>
                    <nav className="sidebar__nav">
                        <h2 className="sidebar__subheading uppercase">{menu.name}</h2>
                        <ul className="sidebar__list">
                            {menu.links.map( link =>
                                <li key={link.name} className="sidebar__list-item">
                                    <NavLink className="sidebar__list-link uppercase" to={link.url}>{link.name}</NavLink>
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
