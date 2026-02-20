/* global gtag */

import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import MainLayout from "@/views/layouts/main/MainLayout.vue";
import AdminLayout from "@/views/layouts/admin/AdminLayout.vue";
import BioPage from "@/views/pages/bio/BioPage.vue";
import HomePage from "@/views/pages/main/HomePage.vue";

import PriceListPage from "@/views/pages/main/PriceListPage.vue";
import ArtikelPage from "@/views/pages/main/ArtikelPage.vue";
import ArtikelDetailPage from "@/views/pages/main/ArtikelDetailPage.vue";
import GaleryPage from "@/views/pages/main/GaleryPage.vue";
import AboutUs from "@/views/pages/main/AboutUsPage.vue";

import LoginPage from "@/views/pages/admin/LoginPage.vue";

// ADMIN
import DashboardAdmin from "@/views/pages/admin/DashboardAdmin.vue";
import HomeAdmin from "@/views/pages/admin/home-admin/HomeAdmin.vue";

// PRICE LIST ADMIN
import PriceListAdmin from "@/views/pages/admin/price-list-admin/PriceListAdmin.vue";
import ReadPriceList from "@/views/pages/admin/price-list-admin/ReadPriceList.vue";
import EditPriceList from "@/views/pages/admin/price-list-admin/EditPriceList.vue";
import CreatePriceList from "@/views/pages/admin/price-list-admin/CreatePriceList.vue";
// import ReadPaketTour from "@/views/pages/admin/paket-tour-admin/ReadPaketTour.vue";
// import EditPaketTour from "@/views/pages/admin/paket-tour-admin/EditPaketTour.vue";
// import CreatePaketTour from "@/views/pages/admin/paket-tour-admin/CreatePaketTour.vue";

// GALERY ADMIN
import GaleryAdmin from "@/views/pages/admin/galery-admin/GaleryAdmin.vue";
import ReadGalery from "@/views/pages/admin/galery-admin/ReadGalery.vue";
import EditGalery from "@/views/pages/admin/galery-admin/EditGalery.vue";
import CreateGalery from "@/views/pages/admin/galery-admin/CreateGalery.vue";

// ARTIKEL ADMIN
import ArtikelAdmin from "@/views/pages/admin/artikel-admin/ArtikelAdmin.vue";
import ReadArtikel from "@/views/pages/admin/artikel-admin/ReadArtikel.vue";
import EditArtikel from "@/views/pages/admin/artikel-admin/EditArtikel.vue";
import CreateArtikel from "@/views/pages/admin/artikel-admin/CreateArtikel.vue";

import ContactAdmin from "@/views/pages/admin/contact-admin/ContactAdmin.vue";
// import BioPageVue from "@/views/pages/BioPage.vue";

const routes = [
  { path: "/bio", component: BioPage, meta: { title: "Bio" } },
  {
    path: "/",
    component: MainLayout,
    children: [
      // { path: "", name: "bio", component: BioPage, meta: { title: "bio" } },
      {
        path: "",
        name: "Home",
        component: HomePage,
        meta: { title: "Home" },
      },
      {
        path: "price-list",
        name: "PriceList",
        component: PriceListPage,
        meta: { title: "PriceList" },
      },
      {
        path: "artikel",
        name: "Artikel",
        component: ArtikelPage,
        meta: { title: "ArtikelPage" },
      },
      {
        path: "artikel/:slug",
        name: "ArtikelDetail",
        component: ArtikelDetailPage,
        meta: { title: "Artikel Detail" },
      },
      {
        path: "galery",
        name: "Galery",
        component: GaleryPage,
        meta: { title: "Galery" },
      },
      // {
      //   path: "artikel",
      //   name: "Artikel",
      //   component: ArtikelPage,
      //   meta: { title: "Artikel" },
      // },
      //
      {
        path: "about-us",
        name: "AboutUs",
        component: AboutUs,
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
      },
      {
        path: "home",
        name: "HomeAdmin",
        component: HomeAdmin,
      },

      // Price-List Admin
      {
        path: "price-list",
        name: "PriceListAdmin",
        component: PriceListAdmin,
      },
      {
        path: "price-list/read/:slug",
        name: "ReadPriceList",
        component: ReadPriceList,
      },
      {
        path: "price-list/edit/:slug",
        name: "EditPriceList",
        component: EditPriceList,
      },{
        path: "price-list/create",
        name: "CreatePriceList",
        component: CreatePriceList,
      },
      // {
      //   path: "paket-tour/create",
      //   name: "CreatePaketTour",
      //   component: CreatePaketTour,
      //   meta: { title: "CREATE PAKET TOUR", requiresAuth: true },
      // },
      // {
      //   path: "paket-tour/read/:slug",
      //   name: "ReadPaketTour",
      //   component: ReadPaketTour,
      //   meta: { title: "READ PAKET TOUR", requiresAuth: true },
      // },
      // {
      //   path: "paket-tour/edit/:slug",
      //   name: "EditPaketTour",
      //   component: EditPaketTour,
      //   meta: { title: "EDIT PAKET TOUR", requiresAuth: true },
      // },
      {
        path: "paket-tour/delete/:slug",
        name: "DeletePaketTour",
        meta: { title: "EDIT PAKET TOUR", requiresAuth: true },
      },

      // Galery Admin
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

      // Artikel Admin
      {
        path: "artikel",
        name: "ArtikelAdmin",
        component: ArtikelAdmin,
        meta: { title: "ARTIKEL MANAGEMENT" },
      },
      {
        path: "artikel/create",
        name: "CreateArtikel",
        component: CreateArtikel,
        meta: { title: "CREATE ARTIKEL", requiresAuth: true },
      },
      {
        path: "artikel/read/:slug",
        name: "ReadArtikel",
        component: ReadArtikel,
        meta: { title: "READ ARTIKEL", requiresAuth: true },
      },
      {
        path: "artikel/edit/:slug",
        name: "EditArtikel",
        component: EditArtikel,
        meta: { title: "EDIT ARTIKEL", requiresAuth: true },
      },
      {
        path: "artikel/delete/:slug",
        name: "DeleteArtikel",
        meta: { title: "EDIT ARTIKEL", requiresAuth: true },
      },

      // Contact Admin
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

// Tracking Navigasi di Vue Router
router.afterEach((to) => {
  if (typeof gtag === "function") {
    gtag("event", "page_view", {
      page_path: to.fullPath,
    });
  }
});

export default router;
