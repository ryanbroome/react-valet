import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** Api Class
 *
 * Static class tying together the methods used to get/send to the API.
 */

class ValetApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.log("API CALL", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ValetApi.token}` };
    const params = method === "get" ? data : {};

    try {
      const res = await axios({ url, method, data, params, headers });
      console.log("API RESPONSE : url", res, ":", url);
      return res;
    } catch (err) {
      console.log("API Error:", err.response);
      let message = err.response.data.error.message;

      throw Array.isArray(message) ? message : [message];
    }
  }

  //?         -----AUTH METHODS-----
  static async validateUser(username, password) {
    const res = this.request(`auth/token`, { username, password }, "post");
    return res;
  }
  static async registerUser(username, password, firstName, lastName, email, phone, locationId, totalParked = 0, isAdmin = false) {
    const res = await this.request(`auth/register`, { username, password, firstName, lastName, email, phone, totalParked, isAdmin, locationId }, "POST");
    return res;
  }

  //?         -----USER METHODS------
  static async getAllUsers() {
    const res = await this.request(`users`);
    return res;
  }
  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res;
  }
  static async updateUser(username, data) {
    const res = await this.request(`users/${username}`, data, "patch");
    return res;
  }
  static async parkOne(username) {
    const res = await this.request(`users/parkOne/${username}`, {}, "patch");
    return res;
  }
  static async removeUserByUsername(username) {
    const res = await this.request(`users/${username}`, {}, "delete");
    return res;
  }
  static async removeUserById(id) {
    const res = await this.request(`users/remove/${id}`, {}, "delete");
    return res;
  }

  //?         -----VEHICLE METHODS-----
  static async createVehicle(ticketNum, vehicleStatus, mobile, color, make, damages, notes) {
    const res = await this.request(`vehicles`, { ticketNum, vehicleStatus, mobile, color, make, damages, notes }, "post");
    return res;
  }
  static async getAllVehicles() {
    const res = await this.request(`vehicles`);
    return res;
  }
  static async getVehiclesByStatus(status) {
    const res = await this.request(`vehicles/status/${status}`);
    return res;
  }
  static async getVehicleByMobile(mobile) {
    let res;
    if (mobile === "") {
      res = await this.request(`vehicles/status/parked`);
    } else {
      res = await this.request(`vehicles/mobile/${mobile}`);
    }
    return res;
  }
  static async updateVehicle(id, data) {
    const res = await this.request(`vehicles/${id}`, data, "patch");
    return res;
  }

  static async checkoutVehicle(id) {
    const res = await this.request(`vehicles/checkout/${id}`, {}, "patch");
    return res;
  }

  static async deleteVehicle(id) {
    const res = await this.request(`vehicles/${id}`, {}, "delete");
    return res;
  }

  // ?          -----TRANSACTION METHODS-----
  static async createTransaction(userId, vehicleId, locationId) {
    const res = await this.request(`transactions`, { userId, vehicleId, locationId }, "post");
    return res;
  }
  static async getAllTransactionsByLocationAndStatus(locationId, status) {
    const res = await this.request(`transactions/location/${locationId}/status/${status}`);
    return res;
  }
  static async getAllTransactionsByLocationAndUserId(locationId, userId) {
    const res = await this.request(`transactions/location/${locationId}/user/${userId}`);
    return res;
  }
  static async getAllTransactionsByDateRange(startYear, startMonth, startDay, endYear, endMonth, endDay) {
    const res = await this.request(`transactions/range`, { startYear, startMonth, startDay, endYear, endMonth, endDay });
    return res;
  }
  static async getActiveTransactionsByMobile(locationId, mobile) {
    const res = await this.request(`transactions/search/location/${locationId}/mobile/${mobile}`);
    return res;
  }
  static async lostKeys(locationId, userId) {
    const res = await this.request(`transactions/lostKeys/${locationId}/${userId}`);
    return res;
  }
  static async getTransactionById(id) {
    const res = await this.request(`transactions/${id}`);
    return res;
  }
  static async updateTransactionById(id, data) {
    const res = await this.request(`transactions/${id}`, data, "patch");
    return res;
  }
  static async deleteTransaction(id) {
    const res = await this.request(`/transactions/${id}`);
    return res;
  }

  //?         -----LOCATION METHODS-----
  static async createLocation(sitename) {
    const res = await this.request(`locations`, { sitename }, "post");
    return res;
  }
  static async getAllLocations() {
    const res = await this.request(`locations`);
    return res;
  }
  static async getLocationById(id) {
    const res = await this.request(`locations/id/${id}`);
    return res;
  }
  static async getLocationBySitename(sitename) {
    const res = await this.request(`locations/sitename/${sitename}`);
    return res;
  }
  static async updateLocation(id, data) {
    const res = await this.request(`locations/${id}`, data, "patch");
    return res;
  }
  static async removeLocation(id) {
    const res = await this.request(`locaations/${id}`, {}, "delete");
  }
}

// *token needed for interacting with API, this is here for development
ValetApi.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVkZHltdW5zdGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIyNDE2NjB9.Gun34muN6saafHRlJa4C7ep-r2FiuctfiC05iIqaXJ8`;

export default ValetApi;
