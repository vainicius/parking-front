import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/Condutor";
export class condutorClient{

    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {'Content-type': 'application/json'}
        })
    }
    public async findById(id: number): Promise<Condutor>{
        try{
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
}
    public async findAll(): Promise<Condutor[]> {
        try{
            return (await this.axiosClient.get<Condutor[]>(`/condutor/listar`)).data
        } catch (error: any){
            return Promise.reject(error.response)
        }    


    }
    public async cadastrar(condutor: Condutor): Promise<Condutor>{
        try{
            return (await this.axiosClient.post<Condutor>('/condutores',condutor)).data
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
    public async atualizar(condutor: Condutor): Promise<Condutor>{
        try{
            return (await this.axiosClient.put<Condutor>('/',condutor)).data
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
    public async delete (id: number): Promise<void>{
        try{
            await this.axiosClient.delete(`/condutor?id=${id}`)
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}