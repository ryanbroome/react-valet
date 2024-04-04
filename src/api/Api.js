import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** Api Class
 *
 * Static class tying together the methods used to get/send to the API.
 * All the API aware stuff should go in here to make requests to API
 */

class ValetApi {
  static token;
  // method to make requests to my api using the hardcoded token until I get finished with setup
  static async request(endpoint, data = {}, method = "get") {
    console.log("API CALL", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ValetApi.token}` };
    const params = method === "get" ? data : {};

    try {
      const res = await axios({ url, method, data, params, headers });
      return res;
    } catch (err) {
      console.log("API Error:", err.response);
      let message = err.response.data.error.message;

      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getUsers() {
    let res = await this.request("users");
    return res;
  }

  static async getVehicles() {
    let res = await this.request("vehicles", {});
    return res;
  }
}

ValetApi.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVkZHltdW5zdGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIyNDE2NjB9.Gun34muN6saafHRlJa4C7ep-r2FiuctfiC05iIqaXJ8`;

export default ValetApi;
