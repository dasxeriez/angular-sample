import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  async ngOnInit(){
    if(localStorage.getItem('user')){
    }else{
      localStorage.setItem('user', 'guest')
      localStorage.setItem('status', 'N')
    }

    console.log(localStorage);
  }
  title = 'angularApp';
}
