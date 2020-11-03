import Api from "../utils/api.js";

export const fetchUsers = () => {
  return new Api().get("/users").build();
};

export const fetchUser = (name) => {
  return new Api().get(`/users/${name}`).build();
};

export const addUser = async (name) => {
  return await new Api().post("/users").data({ name }).build();
};
