import AppRoutes from "./routes";
import "antd/dist/antd.css";
import "../app/assets/css/app.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
};
export default App;
