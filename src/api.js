import axios from "axios";

const requestApi = axios.create({
  baseURL: "http://localhost:4002"
});

export const requestDocumentsApi = async () => {
  return await requestApi.get("/documents");
};

export const readDocumentApi = async id => {
  return await requestApi.get("/documents/read", { params: { _id: id } });
};

export const createDocumentApi = async data => {
  await requestApi.post("/documents/create", data);
};
