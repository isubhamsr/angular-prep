import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  users:any;
  
  constructor(private service:UserService) {}
  
  ngOnInit() {
        
  }

  handleSubmit()
  {
    this.service.getUsers()
    .subscribe(response => {
      this.users = response;
      console.log(response);
    }); 
  }

}
