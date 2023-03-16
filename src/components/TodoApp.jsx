import {Routes, Route} from "react-router-dom";
import Home from "@/routes/Home";
import Profile from "@/routes/Profile";
import Login from "@/routes/Login";
import About from "@/routes/About";
import NotMatch from "@/routes/NotMatch";
import Layout from "@/components/Layout";
import SinglePage from "@/routes/SinglePage";
import ProtectedRoute from "@/components/ProtectedRoute";


const TodoApp = () => {
    
    return (
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />} />
          <Route path="about" element={<About />} >
            <Route path=":slug" element={<SinglePage />}/>
          </Route>
            
            <Route path="profile" element={
            <ProtectedRoute>
            <Profile />
            </ProtectedRoute>
            } />
            
          
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
/*      <Header />
     <TodosLogic /> */
     
      //*/
     /* 
      <h3>JavaScript:</h3>
      <form>
        <input type="text"/>
      </form>
      <span>Time: {new Date().toLocaleTimeString()}</span> } */
      
      
      
    );

  };
  export default TodoApp;