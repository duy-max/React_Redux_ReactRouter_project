
import { Component } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
const menus = [
    {
        name: "Home page",
        to: '/'
    },
    {
        name: "Products",
        to: '/product-list'
    }
]

const MenuLink = ({ label, to}) => {    //custom Link   or user NavLink 
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    let active = match ? "active" : "";
    return (
        <li className={`${active}`}>   {/*check route match,  {``}: viết cho nhiều class   */}
            <Link to={to} >{label}</Link>
        </li>
    )
}
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="#">Call Api</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        to={menu.to}
                        label = {menu.name}
                    />
                )
            })
            return result;
        }

        return result;

    }

}

export default Menu;
