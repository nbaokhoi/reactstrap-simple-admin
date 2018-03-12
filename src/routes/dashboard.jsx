import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Category from 'views/Category/Category.jsx';
import Notifications from 'views/Notifications/Notifications.jsx';
import Icons from 'views/Icons/Icons.jsx';
import Typography from 'views/Typography/Typography.jsx';
import Blank from 'views/BlankPage/Blank.jsx';
import TableList from 'views/TableList/TableList.jsx';
import Maps from 'views/Maps/Maps.jsx';
import UserPage from 'views/UserPage/UserPage.jsx';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/category", name: "Category", icon: "files_single-copy-04", component: Category },
    { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
    { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
    { path: "/notifications", name: "Notifications", icon: "ui-1_bell-53", component: Notifications },
    { path: "/user-page", name: "User Profile", icon: "users_single-02", component: UserPage },
    { path: "/extended-tables", name: "Table List", icon: "files_paper", component: TableList },
    { path: "/typography", name: "Typography", icon: "design-2_ruler-pencil", component: Typography },
    { path: "/blank", name: "Blank", icon: "files_single-copy-04", component: Blank },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
