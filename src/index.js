import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

// For admin dashboard
import ProviderFace from "./components/provider/ProviderFace";
import ServiceSelect from "./components/provider/serviceSelect/ServiceSelect";
import Skill from "./components/provider/skill/Skill";
import Location from "./components/provider/location/Location";
import Summary from "./components/provider/summary/Summary";
import Verification from "./components/provider/verification/Verification";
import ProviderOrders from "./components/provider/providerOrders/ProviderOrders";
import ServiceDetail from "./pages/servicePage/ServiceDetail";
import AdminHome from "./components/admin/AdminHome";
import Reviews from "./components/reviews/Reviews";
import AdminProvider from "./components/admin/AdminProvider";
import HomePage from "./components/cust_homepage/HomePage";
import Providerprofile from "./components/provider/providerprofile/Providerprofile";
import Users from "./components/admin/Users";

// For service provider dashboard
import CustomerDashboard from "./components/cust_homepage/dashboard/Customer/CustomerDashboard";
import CustomerUsers from "./components/cust_homepage/dashboard/Customer/CustomerUsers";

import { store } from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./pages/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <Notifications />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/provider" element={<ProviderFace />} />
            <Route path="/serviceSelect" element={<ServiceSelect />} />

            <Route
              path="/skills"
              element={<ProtectedRoute to="/skills" outlet={<Skill />} />}
            />

            <Route path="/location" element={<Location />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/providerorders" element={<ProviderOrders />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
            <Route path={"services/:id"} element={<ServiceDetail />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/adminusers" element={<Users />} />
            <Route path="/adminprovider" element={<AdminProvider />} />
            <Route path="/providerprofile" element={<Providerprofile />} />

            {/* Route for Service provider dashboard */}
            <Route
              path={"dashboard/customer"}
              element={
                <ProtectedRoute
                  to="/dashboard/customer"
                  outlet={<CustomerDashboard />}
                />
              }
            />

            <Route path={"home"} element={<HomePage />} />
            <Route
              path={"home"}
              element={<ProtectedRoute to="/home" outlet={<HomePage />} />}
            />
          </Routes>
        </BrowserRouter>
        
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
