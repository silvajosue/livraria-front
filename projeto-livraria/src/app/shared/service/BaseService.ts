import { HttpHeaders } from "@angular/common/http";

export class BaseService{
    
    public urlBase: string = "http://localhost:8765/";

    public token = 'Bearer ';

    public httpOptionsJson = {
        headers: new HttpHeaders(
            {
                'Authorization': this.token,
                'Content-Type': 'application/json'
            }
        )
    }

}