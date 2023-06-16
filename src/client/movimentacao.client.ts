import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "@/model/movimentacao";
export class condutorClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Movimentacao> {
    try {
      return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Movimentacao[]> {
    try {
      return (await this.axiosClient.get<Movimentacao[]>(`/movimentacao/listar`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(movimentacao: Movimentacao): Promise<Movimentacao> {
    try {
      return (await this.axiosClient.post<Movimentacao>("/movimentacoes", movimentacao))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(movimentacao: Movimentacao): Promise<Movimentacao> {
    try {
      return (await this.axiosClient.put<Movimentacao>("/", movimentacao)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/movimentacao?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
