import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import Home from "./Pages/Home/Home";
import "./Style/Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Pages/Home/Services";
import Login from "./Pages/Login/Login";
import Detail from "./Pages/Detail/Detail";
import UseAuth from "./Hooks/UseAuth";
import LoadingSpiner from "./Components/LoadingSpiner";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import Verify from "./Components/Verify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/User/AddReview";
import Cart from "./Pages/Dashboard/User/Cart";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin";
import MangeDepartment from "./Pages/Dashboard/Admin/MangeDepartment";
import AddDoctor from "./Pages/Dashboard/Admin/AddDoctor";
import AddService from "./Pages/Dashboard/Admin/AddService";
import AdminRoute from "./Hooks/AdminRoute";
import DashBoardHome from "./Pages/Dashboard/DashBoardHome";
import ManageReview from "./Pages/Dashboard/Admin/ManageReview";
import About from "./Pages/Home/About";
import Review from "./Pages/Home/Review";
import Doctors from "./Pages/Home/Doctors";

const App = () => {
  const location = useLocation();
  const pn = location.pathname;
  let pnstr = pn?.substring(1);
  // title
  useEffect(() => {
    if (pn === "/") {
      document.title = "hospital home";
    } else {
      document.title = pnstr;
    }
  }, [location]);

  const { isLoading } = UseAuth();

  return isLoading ? (
    <LoadingSpiner loading={true} height={"100vh"} />
  ) : (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/department" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route
          path="/department/:id"
          element={
            <PrivateRoute>
              <Detail />
            </PrivateRoute>
          }
        ></Route>
        {/* dashboard url */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route exact path="/dashboard" element={<DashBoardHome />}></Route>
          <Route
            exact
            path="/dashboard/add-review"
            element={
              <PrivateRoute>
                <AddReview />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/myAppointment"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/allAppointment"
            element={
              <AdminRoute>
                <Cart />
              </AdminRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/make-admin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/manageDepartment"
            element={
              <AdminRoute>
                <MangeDepartment />
              </AdminRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/addDoctor"
            element={
              <AdminRoute>
                <AddDoctor />
              </AdminRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/addDepertment"
            element={
              <AdminRoute>
                <AddService />
              </AdminRoute>
            }
          ></Route>
          <Route
            exact
            path="/dashboard/manageReview"
            element={
              <AdminRoute>
                <ManageReview />
              </AdminRoute>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
