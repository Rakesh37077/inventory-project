import { NavLink } from "react-router-dom";
import Classes from './Navigation.module.css'; 


const Navigation = () => {
    return (
        <header className={Classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='' className={({isActive}) => isActive ? Classes.active : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='emicalculator' className={({isActive}) => isActive ? Classes.active : undefined }>EMI Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to='videogallery' className={({isActive}) => isActive ? Classes.active : undefined }>Video Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className={({isActive}) => isActive ? Classes.active : undefined }>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;