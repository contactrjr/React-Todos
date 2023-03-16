import { useParams } from "react-router-dom";

const aboutData = [
    
        {
            slug:"about-app",
            title: "About the App",
            description: "The description of the app",
        },
        {
            slug:"about-dev",
            title: "About the developer",
            description:"More about me .....goes here",
        },
    
]

const SinglePage = () =>{
    const {slug} = useParams();
    console.log('link is:', {slug});
    const currentLinkContent = aboutData.find((data) => 
        (data.slug === slug));
    const {title, description} = currentLinkContent;
    
    return (

    <div className="main_content">
        Single Page content:
        <h2>{title}</h2>
        <p> {description}</p>
    </div>
    );
};

export default SinglePage;