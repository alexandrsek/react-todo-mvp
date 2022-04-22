import { nanoid } from "nanoid";

export const todoData = {
	id: null,
	content: "",
	isDone: false,
};

export const createTodo = () => {
	return { ...todoData, id: nanoid() };
};
