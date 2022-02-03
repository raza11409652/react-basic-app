import {BrowserRouter, Switch, Redirect, Route, useRouteMatch} from "react-router-dom";
import { ForgetContainer, LoginContainer } from "../container";
import {useSelector} from "react-redux";
import {Layout} from "antd";
import DashboardContainer from "../container/dashboard/dashboard";
function ProtectedRoute({children, isLogin, role, ...props}) {
    console.log({isLogin})
    return (
        <Route {...props}>
            {isLogin ? (
                <div>

                    {children}
                </div>
            ) : (
                <Redirect to={"/login"}/>
            )}
        </Route>
    );
}
function AdminRoutes() {
    let {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={() => <Redirect to="/dashboard"/>}/>
            <Route exact path={`${path}dashboard`} component={DashboardContainer}/>
            {/*<Route exact path={`${path}roles`} component={AdminRoles}/>*/}
            {/*<Route exact path={`${path}property`} component={AdminProperties}/>*/}
            {/*<Route exact path={`${path}property/new`} component={PropertyNew}/>*/}
            {/*<Route exact path={`${path}admin`} component={AdminList}/>*/}
            {/*<Route exact path={`${path}admin/new`} component={AdminNew}/>*/}
            {/*/!*<Route exact path={`${path}forget`} component={Forget} />*!/*/}
            {/*<Route exact path={`${path}dashboard`} component={Dashboard}/>*/}
            {/*<Route exact path={`${path}bill/generate`} component={BillGenerate}/>*/}
            {/*<Route exact path={`${path}bill`} component={BillListPage}/>*/}
            {/*<Route exact path={`${path}bookings`} component={BookingPage}/>*/}
            {/*<Route exact path={`${path}bookings/_/:id`} component={SingleBookingPage}/>*/}
            {/*<Route exact path={`${path}bookings/:id/bills`} component={BillsForBooking}/>*/}
            {/*<Route exact path={`${path}bookings/:id/users`} component={UsersForBooking}/>*/}
            {/*<Route exact path={`${path}property`} component={PropertyPage}/>*/}

            {/*<Route exact path={`${path}property/new`} component={PropertyNew}/>*/}
            {/*<Route exact path={`${path}property/caretaker/map`} component={CaretakerMap}/>*/}
            {/*<Route exact path={`${path}property/partner/map`} component={PartnerMap}/>*/}
            {/*<Route exact path={`${path}property/view/:uid`} component={SinglePropertyPage}/>*/}
            {/*<Route exact path={`${path}property/:uid/rooms`} component={SinglePropertyRooms}/>*/}
            {/*/!*<Route exact path={`${path}property/:uid/meters`} component={SinglePropertyMeters}/>*!/*/}
            {/*<Route exact path={`${path}property/:uid/bookings`} component={BookingForProperty}/>*/}
            {/*<Route exact path={`${path}property/:uid/gallery`} component={PropertyGallery}/>*/}
            {/*<Route exact path={`${path}payment`} component={PaymentDash}/>*/}
            {/*<Route exact path={`${path}users`} component={Users}/>*/}
            {/*/!* maintenance routes *!/*/}
            {/*<Route exact path={`${path}maintenance`} component={MaintenanceListPage}/>*/}
            {/*/!*<Route path={`${path}bookings/:id`} component={AdminSingleBooking} />*!/*/}
            {/*/!*<Route exact path={`${path}hotels`} component={AdminHotels} />*!/*/}
            {/*/!*<Route path={`${path}hotels/:id`} component={AdminSingleHotel} />*!/*/}
            {/*/!*<Route exact path={`${path}customers`} component={AdminCustomers} />*!/*/}
            {/*/!*<Route path={`${path}customers/:id`} component={AdminCustomers} />*!/*/}
            <Route component={() => <Redirect to="/"/>}/>
            {/*<Route path={"*"} component={<div>404</div>}></Route>*/}
        </Switch>
    );
}
const AppRoutes = () => {
    const {admin,isLogin,role} = useSelector((state)=>state.AuthReducer)
    // console.log({admin ,isLogin})
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/login"
                    component={() => (isLogin ? <Redirect to="/"/> :
                        <LoginContainer/>)}
                />
                <Route exact path={"/forget"} component={ForgetContainer}/>
                <ProtectedRoute isLogin={isLogin} path={"/"}>
                    <AdminRoutes/>

                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
);
};
export default AppRoutes;
