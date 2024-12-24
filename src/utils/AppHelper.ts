import { AuthResponse } from "../model/AuthResponse";

class AppHelper {
  static getLoggedInUserId() {
    const authResponse = localStorage.getItem("user");
    if (authResponse) {
      const { email } = JSON.parse(authResponse) as AuthResponse;
      return email;
    }
    return "Unkonwn";
  }
}
export default AppHelper;
