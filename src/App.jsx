import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/pages/NotFound";
import { UserPage } from "./components/pages/UserPage";
import { UsersPage } from "./components/pages/UsersPage";
import { Home } from "./components/pages/Home";
import { AboutUsPage } from "./components/pages/AboutUsPage";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import { UserCompanyContext } from "./context/UserCompanyContext";

function App() {

  const [theme, setTheme] = useState('dark');
  const [userCom, setUserCom] = useState([]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}} >
    <UserCompanyContext.Provider value={{userCom, setUserCom}} >
      <div className={`App ${theme}`} id={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home title="HOME PAGE" />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/:id" element={<UserPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </UserCompanyContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
