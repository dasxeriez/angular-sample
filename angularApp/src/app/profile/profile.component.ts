import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {UserInterface} from "./interface/User.interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserService) {
  }

  user: UserInterface[] = [
    {
      username: "",
      name: "",
      address: "",
      tel: ""
    }
  ] as UserInterface[];

  ngOnInit() {
  }

  async test() {

    let result: any = await this.service.test({});
    this.user = result;
  }

  add() {
    this.user.push(new class implements UserInterface {
      address: string;
      name: string;
      tel: string;
      username: string;
    })
  }
}
