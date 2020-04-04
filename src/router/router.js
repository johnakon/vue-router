import Vue from "vue";
import Router from "vue-router";
import home from "../components/Home";
import blog from "../components/Blog";
import services from "../components/Services";
import contact from "../components/Contact";
import details from "../components/Details"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/blog",
      name: "blog",
      component: blog,
    },
    {
      path: "/services",
      name: "services",
      component: services,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/details/:Pid",
      name: 'details',
      component: details
    },
  ],
});
