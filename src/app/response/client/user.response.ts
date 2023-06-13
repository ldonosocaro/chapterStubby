import { User } from "src/app/models/user.model";

export interface ClientResponse {
    status?: string; 
    code: string;
    response: User | User[];
}
