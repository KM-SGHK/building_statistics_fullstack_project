import "./App.css";
import LoginForm from "./page/LoginForm";
import BuildingDetails from "./page/BuildingDetails";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { resetError } from "./redux/auth/action";
import { stopLoading } from "./redux/loading/action";
import LoadingOverlay from "react-loading-overlay";
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(resetError());
      dispatch(stopLoading());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <LoadingOverlay
      active={isLoading}
      spinner={<PuffLoader color={"yellow"} size={200} />}
    >
      <div className="App">
        {isAuthenticated ? <BuildingDetails /> : <LoginForm />}
      </div>
    </LoadingOverlay>
  );
}

export default App;
