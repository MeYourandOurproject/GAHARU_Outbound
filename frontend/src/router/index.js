import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import MainLayout from "@/views/layouts/MainLayout.vue";
import AdminLayout from "@/views/layouts/AdminLayout.vue";
import LandingPage from "@/views/pages/LandingPage.vue";
import BestDestinationPage from "@/views/pages/BestDestinationPage.vue";
import CozyStaycationPage from "@/views/pages/CozyStaycationPage.vue";
import FunActivityPackagePage from "@/views/pages/FunActivityPackagePage.vue";
import AllPackagePage from "@/views/pages/AllPackagePage.vue";
import CostumPackagePage from "@/views/pages/CostumPackagePage.vue";
import GaleryPage from "@/views/pages/GaleryPage.vue";
import ContactPage from "@/views/pages/ContactPage.vue";
import ArtikelPage from "@/views/pages/ArtikelPage.vue";
import PaketTourDetailPage from "@/views/pages/PaketTourDetailPage.vue";
import LoginPage from "@/views/pages/admin/LoginPage.vue";
import DashboardAdmin from "@/views/pages/admin/DashboardAdmin.vue";

import HomeAdmin from "@/views/pages/admin/home-admin/HomeAdmin.vue";

import PaketTourAdmin from "@/views/pages/admin/paket-tour-admin/PaketTourAdmin.vue";
import ReadPaketTour from "@/views/pages/admin/paket-tour-admin/ReadPaketTour.vue";
import EditPaketTour from "@/views/pages/admin/paket-tour-admin/EditPaketTour.vue";
import CreatePaketTour from "@/views/pages/admin/paket-tour-admin/CreatePaketTour.vue";

import GaleryAdmin from "@/views/pages/admin/galery-admin/GaleryAdmin.vue";
import ReadGalery from "@/views/pages/admin/galery-admin/ReadGalery.vue";
import EditGalery from "@/views/pages/admin/galery-admin/EditGalery.vue";
import CreateGalery from "@/views/pages/admin/galery-admin/CreateGalery.vue";

import ContactAdmin from "@/views/pages/admin/contact-admin/ContactAdmin.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: LandingPage,
        meta: { title: "Home" },
      },
      {
        path: "fun-activity-package-page",
        name: "FunActivity",
        component: FunActivityPackagePage,
        meta: { title: "FunActivity" },
      },
      {
        path: "best-destination-package-page",
        name: "BestDestination",
        component: BestDestinationPage,
        meta: { title: "BestDestination" },
      },
      {
        path: "cozy-staycation-package-page",
        name: "CozyStaycation",
        component: CozyStaycationPage,
        meta: { title: "CozyStaycation" },
      },
      {
        path: "all-package",
        name: "AllPackage",
        component: AllPackagePage,
        meta: { title: "AllPackage" },
      },
      {
        path: "costum-package-page",
        name: "CostumPage",
        component: CostumPackagePage,
        meta: { title: "CostumPage" },
      },
      {
        path: "paket-tour/:slug",
        name: "PaketTourDetail",
        component: PaketTourDetailPage,
        meta: { title: "Paket Tour Detail" },
      },
      {
        path: "galery",
        name: "Galery",
        component: GaleryPage,
        meta: { title: "Galery" },
      },
      {
        path: "artikel",
        name: "Artikel",
        component: ArtikelPage,
        meta: { title: "Artikel" },
      },
      {
        path: "about-us",
        name: "AboutUs",
        component: ContactPage,
        meta: { title: "About Us" },
      },
    ],
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        name: "DashboardAdmin",
        component: DashboardAdmin,
        meta: { title: "DASHBOARD", requiresAuth: true },
      },
      {
        path: "home",
        name: "HomeAdmin",
        component: HomeAdmin,
        meta: { title: "HOME MANAGEMENT", requiresAuth: true },
      },
      {
        path: "paket-tour",
        name: "PaketTourAdmin",
        component: PaketTourAdmin,
        meta: { title: "PAKET TOUR MANAGEMENT", requiresAuth: true },
      },
      {
        path: "paket-tour/create",
        name: "CreatePaketTour",
        component: CreatePaketTour,
        meta: { title: "CREATE PAKET TOUR", requiresAuth: true },
      },
      {
        path: "paket-tour/read/:slug",
        name: "ReadPaketTour",
        component: ReadPaketTour,
        meta: { title: "READ PAKET TOUR", requiresAuth: true },
      },
      {
        path: "paket-tour/edit/:slug",
        name: "EditPaketTour",
        component: EditPaketTour,
        meta: { title: "EDIT PAKET TOUR", requiresAuth: true },
      },
      {
        path: "paket-tour/delete/:slug",
        name: "DeletePaketTour",
        // component: DelePaketTour,
        meta: { title: "EDIT PAKET TOUR", requiresAuth: true },
      },
      {
        path: "galery",
        name: "GaleryAdmin",
        component: GaleryAdmin,
        meta: { title: "GALERY MANAGEMENT", requiresAuth: true },
      },
      {
        path: "galery/create",
        name: "CreateGalery",
        component: CreateGalery,
        meta: { title: "CREATE GALERY", requiresAuth: true },
      },
      {
        path: "galery/read/:id",
        name: "ReadGalery",
        component: ReadGalery,
        meta: { title: "READ GALERY", requiresAuth: true },
      },
      {
        path: "galery/edit/:id",
        name: "EditGalery",
        component: EditGalery,
        meta: { title: "EDIT GALERY", requiresAuth: true },
      },
      {
        path: "contact",
        name: "ContactAdmin",
        component: ContactAdmin,
        meta: { title: "CONTACT MANAGEMENT", requiresAuth: true },
      },
    ],
  },
  { path: "/admin-login", name: "LoginPage", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ name: "LoginPage" });
    } else {
      store.dispatch("updateTitle", to.meta.title || "Admin");
      next();
    }
  } else {
    store.dispatch("updateTitle", to.meta.title || "Home");
    next();
  }
});

export default router;
