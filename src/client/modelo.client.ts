import { Modelo } from "@/model/modelo";
import axios, { AxiosInstance } from "axios";

export class ModeloClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Modelo> {
    try {
      return (await this.axiosClient.get(`/modelos/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Modelo[]> {
    try {
      return (await this.axiosClient.get<Modelo[]>(`/modelo/listar`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(modelo: Modelo): Promise<Modelo> {
    try {
      return (await this.axiosClient.post<Modelo>("/modelos", modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(modelo: Modelo): Promise<Modelo> {
    try {
      return (await this.axiosClient.put<Modelo>("/", modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/modelo?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
