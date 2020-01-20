import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import Senate from "../components/Senate.vue";
// import House from "./components/House.vue";
// import SenateAttendance from "./components/SenateAttendance.vue";
// import SenateLoyalty from "./components/SenateLoyalty.vue";
// import HouseAttendance from "./components/HouseAttendance.vue";
// import HouseLoyalty from "./components/HouseLoyalty.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  /* {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  '../views/About.vue'),
  }, */

  { path: "/senate", component: Senate }
  // { path: "/house", component: House },
  // { path: "/senateattendance", component: SenateAttendance },
  // { path: "/senateloyalty", component: SenateLoyalty },
  // { path: "/houseattendance", component: HouseAttendance },
  // { path: "/houseloyalty", component: HouseLoyalty },
  // { path: '/footer', component: Footer },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
