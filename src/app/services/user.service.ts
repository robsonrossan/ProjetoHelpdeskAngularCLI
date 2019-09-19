import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import{HELP_DESK_API} from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post(`${HELP_DESK_API}/api/auth`, user);
  }

  createOrUpdate(user: User){
    

    let config = {
      headers: {
        "Content-Type": "application/json"
        }
      }


    console.log("CHEGOU_AQUI_11")

    if(user.id != null && user.id != ''){
      console.log("CHEGOU_AQUI_1", + user.id +' '+ user.email + ' ' + user.password + ' ' + user.profile);
      return this.http.put(`${HELP_DESK_API}/api/user`, user);

    }else{

      console.log("CHEGOU_AQUI_2", + user.id +' '+ user.email + ' ' + user.password + ' ' + user.profile);
      return this.http.post(`${HELP_DESK_API}/api/user`, user, config);
    }
  }

  findAll(page:number, count:number){
    return this.http.get(`${HELP_DESK_API}/api/user/${page}/${count}`);
  }

  findById(id:string){
    return this.http.get(`${HELP_DESK_API}/api/user/${id}`);
  }

  delete(id:string){
    return this.http.delete(`${HELP_DESK_API}/api/user/${id}`);
  }
  
}
