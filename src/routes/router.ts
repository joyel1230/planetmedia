import { RouteObject, createBrowserRouter } from "react-router-dom";
import { userLogin, userRoutes, userShop } from "./userRoutes";

const routes: RouteObject[] = [userRoutes, userLogin, userShop];

const router = createBrowserRouter(routes);

export default router;
