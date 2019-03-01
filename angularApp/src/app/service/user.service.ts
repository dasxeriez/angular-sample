import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  parameter: any = {
    params: {},
    responseType: "json"
  }
  testPath = "http://localhost:3001" +"/test";
  constructor(
    private http:TransferHttpService ,
    private httpClient: HttpClient,
  ) { }

  async test(params) {
    this.parameter.params = params;
    let result = await this.http.get(this.testPath, this.parameter).toPromise();
    return result;
  }
}
