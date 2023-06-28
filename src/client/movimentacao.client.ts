import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "@/model/movimentacao";


export class movimentacaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8090/api",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Movimentacao> {
    try {
      return (await this.axiosClient.get<Movimentacao>(`movimentacao?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Movimentacao[]> {
    try {
      return (await this.axiosClient.get<Movimentacao[]>(`movimentacao/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(movimentacao: Movimentacao): Promise<Movimentacao> {
    try {
      return (await this.axiosClient.post<Movimentacao>("movimentacao", movimentacao))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(movimentacao: Movimentacao, id: number): Promise<Movimentacao> {
    try {
      return (
        await this.axiosClient.put<Movimentacao>(
          `movimentacao?id=${id}`,
          Movimentacao
        )
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`movimentacao?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
