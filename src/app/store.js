import { configureStore } from "@reduxjs/toolkit";
import { awardApi } from "../features/award/awardApi";
import { blogApi } from "../features/blog/blogApi";
import { careerApi } from "../features/career/CareerApi";
import { contactApi } from "../features/contact/contactApi";
import { galleryApi } from "../features/gallery/galleryApi";
import { portfolioApi } from "../features/portfolio/portfolioApi";
import { storeApi } from "../features/store/storeApi";
import { testimonialApi } from "../features/testimonial.js/testimonialApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [awardApi.reducerPath]: awardApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      blogApi.middleware,
      portfolioApi.middleware,
      careerApi.middleware,
      storeApi.middleware,
      contactApi.middleware,
      galleryApi.middleware,
      testimonialApi.middleware,
      awardApi.middleware,
    ]),
});
