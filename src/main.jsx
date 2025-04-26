import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// import page and components

import Login from "./pages/login";
import Register from "./pages/Register";
import Layout from "./components/Layout.jsx";

// impoort outlet
import Landing from "./components/Landing";
import CategoryDoctor from "./components/CategoryDoctor";

// import payment
import PaymentPage from "./pages/PaymentPage";

import Consult from "./pages/Consult";

import BookingStatus from "./components/BookingStatus.jsx";

// import Admin roles
import AdminPage from "./pages/AdminPage.jsx";
import JadwalDokter from "./components/JadwalDokter.jsx";
import DisplayBook from "./components/DisplayBook.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />
        <Route path="/paymentdoctor/" element={<PaymentPage />} />
        <Route path="/paymentdoctor/bookingstatus" element={<BookingStatus />} />
        <Route path="/consult" element={<Consult />}>
          <Route path="/consult/category" element={<CategoryDoctor />} />
          <Route path="/consult/paymentdoctor/bookingstatus" element={<BookingStatus />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/jadwaldokter" element={<JadwalDokter />} />
        <Route path="/display" element={<DisplayBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Register />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={new QueryClient()}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
