import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

const Home = () => {
    
    return (
      
   // <div className="wrapper">
      <div className="todos">
       <Header>
       <h1>My Todo App</h1>
       <h3>Data will store in the local storage</h3>
       </Header>
        <TodosLogic />
      </div>
    // </div>
     
      
    );

  };
  export default Home;