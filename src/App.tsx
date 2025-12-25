import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<UserDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
