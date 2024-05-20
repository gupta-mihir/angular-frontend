import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];

  
  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res)=>{
        this.users = (res);
        console.log(this.users)
      },
      error: console.log
    })
  }  
}




