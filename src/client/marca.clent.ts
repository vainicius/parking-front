import { Marca } from "@/model/marca";
import axios, {AxiosInstance} from "axios"

class MarcaClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8090/api/',
      headers: { 'Content-type' : 'application/json' },
    });
  }
  public async findById(id: number): Promise<Marca> {
    try {
      return (await this.axiosClient.get<Marca>(`marca?id=${id}`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
  public async findAll(): Promise<Marca[]> {
    try {
      return (await this.axiosClient.get<Marca[]>(`marca/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(marca: Marca): Promise<Marca> {
    try {
      return (await this.axiosClient.post<Marca>(`marca`, marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(id: number, marca: Marca): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`marca?id=${id}`, marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      return (await this.axiosClient.delete(`marca?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new MarcaClient();