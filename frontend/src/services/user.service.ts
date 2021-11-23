// import {Injectable} from "@angular/core";
// import {Http, Response} from "@angular/http";
// import { Observable } from "rxjs";
// import 'rxjs/add/operator/map';
// // import {User} from "src/models/user.model";

// @Injectable()
// export class UserService {
//   constructor(private http: Http) {}

//   getUser(): Observable<User[]> {
//     return this.http.get('/api/user')
//       .map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));
//   }
// }