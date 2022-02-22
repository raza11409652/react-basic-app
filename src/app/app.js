import AppRoutes from "./routes";

const App = () => {
  return <AppRoutes />;
};
export default App;
/**
 * Routes
 *
 * www.example.com/home
 * www.example.com/about
 * www.example.com/profile
 * www.example.com/booking ->[List of bookings]
 * www.example.com/booking/{{booking_id}} ->single booking page
 * www.example.com/home?query=name&city=JK&search=.......
 *
 *
 * npm i react-router-dom [version 5.2.0]
 *
 * router-router-dom ->most used library routing in react <6.0 version
 * >6.0 update
 */
