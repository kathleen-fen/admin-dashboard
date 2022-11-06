import { AxiosObject } from "./axiosObject";

export const getUserList = () => AxiosObject.get("data");
export const addUser = (data) => AxiosObject.post("data", data);
export const updateUser = (id, data) => AxiosObject.put(`data/${id}`, data);
export const deleteUser = (id) => AxiosObject.delete(`data/${id}`);
