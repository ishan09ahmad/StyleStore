import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import PlaceOrder from "../pages/PlaceOrder";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />}></Route>

    <Route element={<PublicRoutes />}>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Route>


    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="product/:id" element={<ProductDetails />}></Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/place-order" element={<PlaceOrder />}></Route>
    </Route>
<Route path="*" element={<Home/>}></Route>

  </Route>))

export default router;