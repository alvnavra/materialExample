import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  constructor(private dialgoRef:MatDialogRef<NewContactDialogComponent>,
              private userService:UsersService) { }
  user:User;
  avatars = ['svg-1','svg-2','svg-3','svg-4']
  name = new FormControl('', [Validators.required]);
  ngOnInit() {
    this.user = new User();
  }

  save(){
    this.userService.addUser(this.user).then(user=>{
      this.dialgoRef.close(user)
    })    
  }

  dismiss(){
    this.dialgoRef.close(null);
  }
  

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' :'';
  }

}
