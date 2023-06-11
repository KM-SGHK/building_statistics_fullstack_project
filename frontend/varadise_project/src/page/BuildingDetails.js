import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBuildings, fetchEUI } from "../util/api/fetch.js";
import ErrorMessageSnackBar from "../components/ErrorMessageSnackBar";
import { startLoading, stopLoading } from "../redux/loading/action";
import TabContainer from "../components/buildings/TabContainer.js";
import { loadBuildings, loadEUI } from "../redux/buildings/action.js";

export default function BuildingDetails() {
  const token = useSelector((state) => state.auth.token);
  const [buildingPageError, setBuildingPageError] = useState(null);

  const dispatch = useDispatch();

  const isFetchingSuccessful = (eui, details) => {
    return eui.status == 200 && details.status == 200;
  };

  const getDataFromResponse = async (eui, details) => {
    let euiDetails = await eui.json();
    let buildingDetails = await details.json();
    return {
      euiDetails,
      buildingDetails,
    };
  };

  const getErrorMessageFromResponse = async (eui) => {
    let response = await eui.json();
    let errorMessage = response.error;
    return errorMessage;
  };

  const loadBuildingsData = async (token) => {
    dispatch(startLoading());
    const [eui, details] = await Promise.all([
      fetchEUI(token),
      fetchBuildings(token),
    ]);
    if (!isFetchingSuccessful(eui, details)) {
      let errorMessage = await getErrorMessageFromResponse(eui);
      setBuildingPageError(errorMessage);
      return;
    }
    let responseData = await getDataFromResponse(eui, details);
    dispatch(stopLoading());
    dispatch(loadEUI(responseData.euiDetails.data));
    dispatch(loadBuildings(responseData.buildingDetails.data));
  };

  useEffect(() => {
    loadBuildingsData(token);
  }, []);

  return (
    <>
      <ErrorMessageSnackBar error={buildingPageError} />
      <TabContainer />
    </>
  );
}
