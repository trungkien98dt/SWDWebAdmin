import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './../menu/Menu.css';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý danh sách đặt xe',
        to: '/booking-list',
        exact: false
    },
    {
        name: 'Quản lý danh sách xe',
        to: '/bike-list',
        exact: false
    },
    {
        name: 'Quản lý danh sách người dùng',
        to: '/user-list',
        exact: false
    },
    {
        name: 'Quản lý danh sách cửa hàng',
        to: '/branch-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let icon;
                switch (label) {
                    case "Trang chủ":
                        icon = "glyphicon glyphicon-home"
                        break;
                    case "Quản lý danh sách đặt xe":
                        icon = "glyphicon glyphicon-shopping-cart"
                        break;
                    case "Quản lý danh sách xe":
                        icon = "glyphicon glyphicon-list"
                        break;
                    case "Quản lý danh sách người dùng":
                        icon = "glyphicon glyphicon-list"
                        break;
                    case "Quản lý danh sách cửa hàng":
                        icon = "glyphicon glyphicon-list"
                        break;
                    default:
                        break;
                }
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            <span className={icon}></span>
                            <span className="menu">{label}</span>
                        </Link>
                    </li>
                );
            }}

        />
    );
};

class Menu extends Component {
    render() {
        return (
            <div className="left">
                <ul>
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;