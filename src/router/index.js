import { createRouter, createWebHashHistory } from "vue-router";

const HomePage = () => import("../pages/HomePage.vue");
const AboutPage = () => import("../pages/AboutPage.vue");
const PortfolioPage = () => import("../pages/PortfolioPage.vue");
const ProjectDetailPage = () => import("../pages/ProjectDetailPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");

// 5 halaman: Beranda, Tentang, Portofolio, Detail Proyek (dinamis), Kontak
const routes = [
  { path: "/", name: "home", component: HomePage, meta: { title: "Beranda" } },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: { title: "Tentang" },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioPage,
    meta: { title: "Portofolio" },
  },
  {
    path: "/portfolio/:id",
    name: "project-detail",
    component: ProjectDetailPage,
    meta: { title: "Detail Proyek" },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: { title: "Kontak" },
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
