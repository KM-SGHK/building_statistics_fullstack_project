import { AuthService } from "../service/authService.js";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  signUp = async (request, response) => {
    try {
      let result = await this.authService.signUp(request.body);

      if(result.isSignUpCompleted){
        response.status(200).json({
            success: true
          });
      }

      if(!result.isSignUpCompleted){
        response.status(401).json({
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

  signIn = async (request, response) => {
    try {
      let result = await this.authService.signIn(request.body);

      if(result.isSignInCompleted){
        response.status(200).json({
            success: true,
            user: result.user,
            token: result.token
          });
      }

      if(!result.isSignInCompleted){
        response.status(401).json({
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
