import axios, { AxiosInstance } from "axios";
import { Veiculo } from "@/model/veiculo";
export class veiculoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Veiculo> {
    try {
      return (await this.axiosClient.get<Veiculo>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Veiculo[]> {
    try {
      return (await this.axiosClient.get<Veiculo[]>(`/veiculo/listar`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(veiculo: Veiculo): Promise<Veiculo> {
    try {
      return (await this.axiosClient.post<Veiculo>("/veiculos", veiculo))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(veiculo: Veiculo): Promise<Veiculo> {
    try {
      return (await this.axiosClient.put<Veiculo>("/", veiculo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/veiculo?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
