import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/test", "routes/test.tsx"),
  
  // Auth routes
  route("/auth/login", "routes/auth/login.tsx"),
  route("/auth/signup", "routes/auth/signup.tsx"),
  
  // Account routes
  route("/account", "routes/account/index.tsx"),
  route("/account/mybookings", "routes/account/mybookings.tsx"),
  route("/account/mylistings", "routes/account/mylistings.tsx"),
  
  // Bookings routes
  route("/bookings/create", "routes/bookings/create.tsx"),
  route("/bookings/edit", "routes/bookings/edit.tsx"),
  route("/bookings/view", "routes/bookings/view.tsx"),
  
  // Listings routes
  route("/listings/create", "routes/listings/create.tsx"),
  route("/listings/view", "routes/listings/view.tsx"),
  route("/listings/edit", "routes/listings/edit.tsx"),
  route("/listings", "routes/listings/index.tsx")
] satisfies RouteConfig;
