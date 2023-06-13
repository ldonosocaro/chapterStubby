import { User } from "src/app/models/user.model";

export interface ClientsResponse {
    status?: string; 
    code: string;
    response: User[];
}
