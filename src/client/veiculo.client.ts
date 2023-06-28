import axios, { AxiosInstance } from "axios";
import { Veiculo } from "@/model/veiculo";
export class veiculoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8090/api",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Veiculo> {
    try {
      return (await this.axiosClient.get<Veiculo>(`veiculo?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Veiculo[]> {
    try {
      return (await this.axiosClient.get<Veiculo[]>(`veiculo/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(veiculo: Veiculo): Promise<Veiculo> {
    try {
      return (await this.axiosClient.post<Veiculo>(`veiculo`, veiculo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(id: number, veiculo: Veiculo): Promise<Veiculo> {
    try {
      return (await this.axiosClient.put<Veiculo>(`veiculo?id=${id}`, veiculo))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`veiculo?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new veiculoClient()