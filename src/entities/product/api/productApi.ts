import axios from "axios";
import { CardData } from "@/entities/catalog";

export async function getProducts() {
  const response = await axios.get<CardData>("/api/air-conditioners");
  return response.data;
}
