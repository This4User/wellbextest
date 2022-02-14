import instance from "./instance";

const TodosAPI = {
    async getTodos() {
        const response = await instance.get("/todos");
        return await response.data;
    }
};

export default TodosAPI;