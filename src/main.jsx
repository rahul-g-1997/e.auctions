import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Error from "./pages/error/Error.jsx";
import Home from "./pages/home/Home.jsx";
import Contacts from "./pages/contact/Contact.jsx";
import AuctionLots from "./pages/auctionlots/AuctionLots.jsx";
import AuctionResults from "./pages/auctionresults/AuctionResults.jsx";
import Lotlists from "./pages/lotlists/Lotlists.jsx";
import Notices from "./pages/notices/Notices.jsx";
import Registration from "./pages/registration/Registration.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/auction-lots" element={<AuctionLots />} />
      <Route path="/auction-results" element={<AuctionResults />} />
      <Route path="/lotlists" element={<Lotlists />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/signin" element={<SignIn />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
