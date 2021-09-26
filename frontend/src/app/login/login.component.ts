import { OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  currentUser: User;
  floatLabelControl = new FormControl('auto');
  message: string;
  //this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value
  submit() {
    var isDelegate: boolean;
    if (this.floatLabelControl.value == 'delegate') isDelegate = true;
    else isDelegate = false;
    this.userService
      .login(
        this.form.getRawValue().username,
        this.form.getRawValue().password,
        isDelegate
      )
      .subscribe((user: User) => {
        if (user) {
          let chosen;

          if (this.floatLabelControl.value == 'delegate') {
            chosen = true;
          } else {
            chosen = false;
          }

          localStorage.setItem('currentUser', JSON.stringify(user));

          if (chosen == true && !user.isDelegate)
            this.error = 'Unsuccesfull login';
          else if (chosen == false && user.isDelegate)
            this.error = 'Unsuccesfull login';
          else if (user.username == 'admin') {
            this.router.navigate(['/organizer']);
          } else if (user.isDelegate) {
            this.router.navigate(['/delegatePage']);
          } else this.router.navigate(['/nationalDelegation']);
        } else {
          this.error = 'Unsuccesfull login';
        }
      });
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
