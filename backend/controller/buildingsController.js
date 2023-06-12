import { BuildingsService } from "../service/buildingsService.js";

export class BuildingsController {
  constructor() {
    this.buildingService = new BuildingsService();
  }

  // @desc      Get all EUI data based on the 7 building types
  // @route     GET /api/v1/buildings/eui
  // @access    Private
  fetchEUI = async (request, response) => {
    try {
      let result = await this.buildingService.getEUIFromDB();
      if (result.isFetchingSuccessful) {
        response.status(200).json({
          success: true,
          data: result.data,
        });
      }

      if (!result.isFetchingSuccessful) {
        response.status(500).json({
          success: false,
          error: result.error,
        });
      }
    } catch (e) {
      response.status(500).json({
        error: e.message,
      });
    }
  };

  // @desc      Get all building details
  // @route     GET /api/v1/buildings/details
  // @access    Private
  fetchBuildings = async (request, response) => {
    try {
      let result = await this.buildingService.getBuildingsFromDB();

      if (result.isFetchingSuccessful) {
        response.status(200).json({
          success: true,
          data: result.data,
        });
      }

      if (!result.isFetchingSuccessful) {
        response.status(500).json({
          success: false,
          error: result.error,
        });
      }
    } catch (e) {
      response.status(500).json({
        error: e.message,
      });
    }
  };
}
