import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';


const links = [
    {
        path : "/",
        text : "Home"
    },
    {
        path : "about",
        text : "About"
    },
    {
        path : "profile",
        text : "Profile"
   },
   {
        path : "login",
        text : "Login"
   },
];
const Navigator = () => {

    const {user, logout} = useAuthContext();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    const [navBarOpen, SetNavBarOpen] = useState(false);

    //handler to click outside the menu to close the menu
    const ref = useRef();
    useEffect(
        ()=> {
            const handler = (event) => {
                if (navBarOpen && ref.current && !ref.current.contains(event.target))
                {
                    SetNavBarOpen(false);
                }
            };
            document.addEventListener('mousedown', handler);
            return () => {
                //clean the even
                document.removeEventListener('mousedown',handler)
            }
            
        }, [navBarOpen]
    );
    return (
        <>
        <div ref={ref} className="navbar">
            <button className="toggle"
                    onClick={()=>SetNavBarOpen((prev) => !prev)}>
                {/*navBarOpen ? 'Close' : 'Open'*/}
                {
                    navBarOpen ? (
                        <MdClose style={{ width : '32px', height : '32px'}} />
                    ) :
                    (
                        <FiMenu style={{ width : '32px', height : '32px'}} />
                    )
                }
            </button>
            
            <ul className={`menu-nav${navBarOpen ? ' show-menu' : ''}`}>
            My Navigations
                {
                    links.map((link) => {
                        return( 
                            <React.Fragment key={link.text}>
                                {
                                    link.path === "login" ? (
                                        !user && (
                                        <li>
                                            <NavLink to={link.path}
                                            onClick = {()=>SetNavBarOpen(false)}
                                            >
                                                {link.text}
                                            </NavLink>
                                        </li>
                                    )) :
                                    link.path === "profile" ? (
                                        user && (
                                        <li>
                                            <NavLink to={link.path} onClick={()=>SetNavBarOpen(false)}>
                                                {link.text}
                                            </NavLink>
                                        </li>
                                    )) :
                                    (
                                        <li>
                                            <NavLink to={link.path} onClick={()=>SetNavBarOpen(false)}>
                                                {link.text}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            
                            </React.Fragment>
                   
                    );
                    }
                    )
                }
                {
                    !user && (
                        <li className="log-in">
                            <span>Login to edit the Todo item</span>
                        </li>
                    )
                }
            </ul>
        </div>
        {
            user && (
                <div className="logout">
                    <p>{user}</p>
                    {<button onClick={handleLogout}>Logout</button>}
                </div>
            )
        }
        </>
    );
};
export default Navigator;