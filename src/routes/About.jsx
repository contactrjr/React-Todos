import { NavLink, Outlet } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
    return (
        <>
        <Header>
        <h1> About Page ...</h1>
        </Header>
        <div className="about">
            
        <ul>
            <li>
                <NavLink to="about-dev">About Dev</NavLink>
                
            </li>
            <li>
                <NavLink to="about-app">About App</NavLink>
                
            </li>
        </ul>
        <Outlet/>
        </div>
        </>
    );
    //<div> About Page</div>
};

export default About;