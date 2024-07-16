import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
// import Blogs from "./pages/blogs/blogs";
import Home from "./pages/home";
import Form from "./pages/blogs/Form";
import {  FormGive } from "./context";

function App() {
  return (
    <>
      <FormGive>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-blog" element={<Form />} />
        </Routes>
      </FormGive>
    </>
  );
}

export default App;
