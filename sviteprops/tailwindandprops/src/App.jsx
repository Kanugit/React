import "./App.css";
import Sidebar from "./components/sidebar";
function App() {
   let obj={
    name:"kanu",
    age:23
  }
  let newarr=[1,2,3]
  return (
    <>
      <h1 className="">tailwind test </h1>
      <Sidebar username='kanu' />
      
      
    </>
  );
}

export default App;
