import { useAuthContext } from "@/context/AuthContext"
import styles from  "@/styles/Profile.module.css"
import Header from "@/components/Header";

const Profile = () =>{
    const { user } = useAuthContext();
    console.log("user name : ", user);
    return (
    <div>
        <Header>
        <h1>My Profile Page</h1>
        </Header>
        <div className={styles.profile}>
            <h2> Welcome, {user} </h2>
        </div>
    </div>
    )
};

export default Profile;