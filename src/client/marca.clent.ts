import { Marca } from "@/model/marca";
import axios, {AxiosInstance} from "axios"

export class MarcaClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(id: number): Promise<Marca> {
    try {
      return (await this.axiosClient.get(`/marcas/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Marca[]> {
    try {
      return (await this.axiosClient.get<Marca[]>(`/marca/listar`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(marca: Marca): Promise<Marca> {
    try {
      return (await this.axiosClient.post<Marca>("/marcas", marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async atualizar(marca: Marca): Promise<Marca> {
    try {
      return (await this.axiosClient.put<Marca>("/", marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/marca?id=${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}