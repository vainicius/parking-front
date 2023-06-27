import { Modelo } from "@/model/modelo";
import axios, { AxiosInstance } from "axios";

export class ModeloClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8090/api",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Modelo> {
    try {
      return (await this.axiosClient.get(`modelo?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Modelo[]> {
    try {
      return (await this.axiosClient.get<Modelo[]>(`modelo/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(modelo: Modelo): Promise<Modelo> {
    try {
      return (await this.axiosClient.post<Modelo>(`modelo`, modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(id: number, modelo: Modelo): Promise<Modelo> {
    try {
      return (await this.axiosClient.put<Modelo>(`modelo?id=${id}`, modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`marca?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new ModeloClient();