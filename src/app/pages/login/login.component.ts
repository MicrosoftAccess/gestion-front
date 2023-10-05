import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {
  IGetLoginResponse,
  LoginForm,
} from 'src/app/interfaces/form.interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this._loginService.login(this.loginForm.value as LoginForm).subscribe({
      next: ({ access_token }: IGetLoginResponse) => {
        localStorage.setItem('access_token', access_token);
        this._router.navigate(['/student-cases']);
      },
    });
  }
  get email() {return this.loginForm.get('email')}
  ngOnInit(): void {}
}
