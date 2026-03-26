import axios from "axios";
import { CardData } from "@/entities/catalog";

export async function getProducts() {
  try{ 
    const response = await axios.get<CardData>("/api/air-conditioners");
    return response.data;
  }catch(e){ 
    console.log(e)
  }
 
}
