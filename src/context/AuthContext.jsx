import { useState, createContext, useContext, useEffect} from "react"

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(getLocalStorage());
    const login = (user) => setUser(user);
    const logout = () => setUser(null);
    useEffect(() => {
        const temp = JSON.stringify(user);
        localStorage.setItem("username",temp);

    },[user]
    );

    function getLocalStorage(){
        const storedUserName = JSON.parse(localStorage.getItem("username"))
        return storedUserName || '';
    }
    return(
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () =>useContext(AuthContext);