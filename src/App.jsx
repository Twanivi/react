import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/pages/NotFound";
import { UserPage } from "./components/pages/UserPage";
import { UsersPage } from "./components/pages/UsersPage";
import { Home } from "./components/pages/Home";
import "./App.css";
// import { ThemeContext } from "./context/ThemeContext";
// import { useState } from "react";

function App() {

  // const [theme, setTheme] = useState('dark');

  return (
    // <ThemeContext.Provider value={{theme, setTheme}} >
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home title="HOME PAGE" />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/:id" element={<UserPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    // </ThemeContext.Provider>
  );
}

export default App;
