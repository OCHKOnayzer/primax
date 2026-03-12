import axios, { type CreateAxiosDefaults } from "axios";
import { getContentType } from "./api.helper";

const options: CreateAxiosDefaults = {
  baseURL: "",
  headers: getContentType(),
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);
