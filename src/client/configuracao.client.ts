import axios, { AxiosInstance } from "axios";
import { Configuracao } from "@/model/Configuracao";


export class configuracaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8090/api",
      headers: { "Content-type": "application/json" },
    });
  }
  public async getConfiguracao(): Promise<Configuracao> {
    try {
      const response = await this.axiosClient.get<Configuracao>('configuracao')
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }
 
public async cadastrar(Condutor: Configuracao): Promise<Configuracao> {
  try {
      return (await this.axiosClient.post('configuracao', Configuracao)).data
  } catch (error: any) {
      return Promise.reject(error.response)
  }
}

public async atualizar(Configuracao: Configuracao): Promise<Configuracao> {
  try {
      return (await this.axiosClient.put<Configuracao>(`configuracao?id=${Configuracao.id}`, Configuracao)).data
  } catch (error: any) {
      return Promise.reject(error.response)
  }
}
public async findById(id: number): Promise<Configuracao> {
  try {
      return (await this.axiosClient.get<Configuracao>(`configuracao?id=${id}`)).data
  } catch (error: any) {
      return Promise.reject(error.response)
  }
}
  
}

