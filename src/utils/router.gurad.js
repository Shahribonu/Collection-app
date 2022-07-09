const whiteList = ["/auth/registr", "/auth/login"];
const token = localStorage.getItem("jwt");

const guard = (route, navigate) => {
  console.log("Call to Guard");
  console.log("Current Route", route);
  console.log("Navigate", navigate);
  const isUserLayoutRoute = whiteList.includes(route.pathname);

  if (isUserLayoutRoute) {
    if (token) {
      navigate("/");
      return;
    } else {
      navigate();
      return;
    }
  } else {
    console.log("Not UserLayout");
    if (token) {
      navigate();
      return;
    } else {
      console.log("Go to Login");
      navigate("/auth/login");
      return;
    }
  }
};

export default guard;
