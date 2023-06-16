import axios, { AxiosInstance } from "axios";
import { Configuracao } from "@/model/Configuracao";
export class configuracaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Configuracao> {
    try {
      return (await this.axiosClient.get<Configuracao>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
 
  public async cadastrar(configuracao: Configuracao): Promise<Configuracao> {
    try {
      return (await this.axiosClient.post<Configuracao>("/configuracoes", configuracao))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(configuracao: Configuracao): Promise<Configuracao> {
    try {
      return (await this.axiosClient.put<Configuracao>("/", configuracao)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/configuracao?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
