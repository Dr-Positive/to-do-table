   
import React from "react";

import { Route, Routes } from "react-router-dom";

import  MainPage  from "./pages/mainPage";
import  AuthPage  from "./pages/authPage";
import  RegPage  from "./pages/regPage";
import  DetailPage  from "./pages/DetailPage";

import {Navbar} from './components/Navbar'

function App() {
  return (
    <>
    <div><Navbar/></div>
    <Routes>
      <Route path="/" element={ <MainPage />} />
      <Route path="/auth" element={ <AuthPage />} />
      <Route path="/register" element={ <RegPage />} />
      <Route path="/detail/:id" element={ <DetailPage />} />
      {/* <Route path="" element={ <MainPage />} /> */}
    </Routes>
    </>
  );
}

export default App;


// function App(){
//   const {token,login,logout,userId} =useAuth()
//   const isAuthenticated =!! token
//   const routes = useRoutes(false)
//   return(
//    <AuthContext.Provider value={{
//       token,login,logout,userId
//     }}>
//       <Router>
//         <div className="container">
//           {routes}
//         </div>
//       </Router>
//    </AuthContext.Provider>
// }
// export default App