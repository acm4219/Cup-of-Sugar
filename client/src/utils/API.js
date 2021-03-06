import axios from "axios";

export default {
  // // ----- Heroku API's ------
  // getItems: () => {
  //   return axios.get("/api/results/").then((result) => result.data);
  // },
  // getFilteredItems: (categoryArr) => {
  //   return axios
  //     .get(`/api/results/filtered/${categoryArr}`)
  //     .then((result) => result.data)
  //     .catch((err) => console.log(err));
  // },
  // getSingleItem: (id) => {
  //   return axios.get(`/api/result/${id}`).then((result) => result.data);
  // },
  // deleteItem: (id) => {
  //   return axios.delete(`/api/deleteitem/${id}`).then((result) => result.data);
  // },
  // saveItem: (itemData) => {
  //   return axios
  //     .post("/api/item/postnewitem", itemData)
  //     .then((result) => result.data);
  // },
  // getUsers: () => {
  //   return axios.get("/api/users/").then((result) => result.data);
  // },
  // getSingleUser: (id) => {
  //   return axios.get(`/api/user/${id}`).then((result) => result.data);
  // },
  // getUserByAuth0: (auth0_id) => {
  //   return axios.get(`/api/users/${auth0_id}`).then((result) => result.data);
  // },
  // postUser: (userData) => {
  //   return axios.post("/api/newuser/", userData).then((result) => result.data);
  // },
  // getItemsByUser: (UserId) => {
  //   return axios.get(`/api/owneditems/${UserId}`).then((result) => result.data);
  // },
  // changeStatus: (id, status) => {
  //   return axios
  //     .post(`/api/isAvailable/${id}`, status)
  //     .then((result) => result.data);
  // },
  // --------- Localhost API's -------
  getItems: () => {
    return axios
      .get("http://localhost:3001/api/results/")
      .then((result) => result.data);
  },
  getFilteredItems: (categoryArr) => {
    console.log("getFilteredItems", categoryArr);
    return axios
      .get(`http://localhost:3001/api/results/filtered/${categoryArr}`)
      .then((result) => result.data)
      .catch((err) => console.log(err));
  },
  getSingleItem: (id) => {
    return axios
      .get(`http://localhost:3001/api/result/${id}`)
      .then((result) => result.data);
  },
  deleteItem: (id) => {
    console.log("deleting id", id);
    return axios
      .delete(`http://localhost:3001/api/deleteitem/${id}`)
      .then((result) => result.data);
  },
  saveItem: (itemData) => {
    return axios
      .post("http://localhost:3001/api/item/postnewitem", itemData)
      .then((result) => result.data);
  },
  getUsers: () => {
    return axios
      .get("http://localhost:3001/api/users/")
      .then((result) => result.data);
  },
  getSingleUser: (id) => {
    return axios
      .get(`http://localhost:3001/api/user/${id}`)
      .then((result) => result.data);
  },
  getUserByAuth0: (auth0_id) => {
    console.log("just for fun, this works too, right?", auth0_id);
    return axios
      .get(`http://localhost:3001/api/users/${auth0_id}`)
      .then((result) => result.data);
  },
  postUser: (userData) => {
    console.log("Userdata in App.js: ", userData);
    return axios
      .post("http://localhost:3001/api/newuser/", userData)
      .then((result) => result.data);
  },
  getItemsByUser: (UserId) => {
    console.log("axios WUMBO:", UserId);
    return axios
      .get(`http://localhost:3001/api/owneditems/${UserId}`)
      .then((result) => result.data);
  },
  changeStatus: (id, status) => {
    console.log("inside axios changeStat", id, status);
    return axios
      .post(`http://localhost:3001/api/isAvailable/${id}`, status)
      .then((result) => result.data);
  },
};
