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
  static async registerUser(username, password, firstName, lastName, email, phone, totalParked = 0, isAdmin = false, locationId = 1) {
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

  // TODO LeftOffHere
  // todo go back to valet backend and make a route to search transactions by vehicle.mobile. Same as vehicles getByMobile
  // todo leftOffHere Make API methods for transaction methods.
  // todo just mimick the ones you made for vehicles. All data columns are returned so we can pick and choose what we want to show.
  // todo let's start with making all the routes defined in backend work.
  // todo transactions/location/:locationId/status/:status GET
  // todo transactions/location/:locationId/user/:userId GET
  // todo transactions/range {req.body = startEnd Year, Month, Day} GET
  // todo transactions/:id GET
  // todo transactions/:id PATCH
  // todo create addVehicle form, form should add a vehicle and a transaction to the database at the same time
  // todo create button to "checkout" or make a PATCH request to update the vehicle.check_out to CURRENT_TIMESTAMP
  // todo create a button for "lostKey" route, this should return ALL transaction data for the current userId limit to the last 10 transactions

  // * transaction methods
}

// *token needed for interacting with API, this is here for development
ValetApi.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVkZHltdW5zdGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTIyNDE2NjB9.Gun34muN6saafHRlJa4C7ep-r2FiuctfiC05iIqaXJ8`;

export default ValetApi;
