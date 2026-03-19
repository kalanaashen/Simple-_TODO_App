import api from "./axiosInstance";


export const getTasks = () => {
  return api.get("/todos/");
};


export const createTask = (data) => {
  return api.post("/todos/", data);
};


export const deleteTaskApi = (id) => {
  return api.delete(`/todos/${id}/`);
};

export const completeTask = (id) => {
  return api.patch(`/todos/${id}/`, {
    is_completed: true,
  });
};