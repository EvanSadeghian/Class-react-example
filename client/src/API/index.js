/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const getTests = (data) => axios.get("/api/test/data", data);
const postTest = (data) => axios.post("/api/test/data", data);
const deleteNote = (id) => axios.delete("/api");

export default {
	getTests,
	postTest,
};
