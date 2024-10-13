import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { IUser, User } from './model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'user-management',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [CommonModule, FormsModule],
})
export class UserComponent implements OnInit {

  users: User[] = [];
  
  user = new User('', '', '');
  isAddUser = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList() {
    this.userService.getUserList().subscribe(res => {
      this.users = res;
    });
  }

  onSubmit() {
    this.userService.saveUser(this.user).subscribe(res => {
      this.loadUserList();
      this.setIsAddUser();
    })
  }

  deleteUser(id: string) {
    this.userService.deleteUserById(id).subscribe(res => {
      this.loadUserList();
    });
  }

  setIsAddUser() {
    if (this.isAddUser) {
      this.isAddUser = false;
    } else {
      this.isAddUser = true;
    }
  }
}
