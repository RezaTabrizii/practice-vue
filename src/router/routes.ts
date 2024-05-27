import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export default routes;
