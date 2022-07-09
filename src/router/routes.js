import Register from "../authorization/Register";
import Login from "../authorization/Login";

const routes = [
  {
    path: "/agencies",
    name: "Agencies",
    component: Agencies,
    meta: {},
    children: [],
  },
  {
    path: "/influencers",
    name: "Influencers",
    component: Influencers,
    meta: {},
    children: [],
  },
  {
    path: "/services",
    name: "Services",
    component: AllCategories,
    meta: {},
    children: [],
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: BlogGrid,
    meta: {},
    children: [],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {},
    children: [],
  },
  {
    path: "/add-listing/new",
    name: "AddListing",
    component: AddListing,
    meta: {},
    children: [],
  },
  // White List
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {},
    children: [],
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    meta: {},
    children: [],
  },
  {
    path: "*",
    name: "NoMatch",
    component: Error,
    meta: {},
    children: [],
  },
];
export default routes;
