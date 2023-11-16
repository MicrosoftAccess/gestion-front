import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {
  IGetLoginResponse,
  LoginForm,
} from 'src/app/interfaces/form.interfaces';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private _router: Router,
    private _messageService: MessageService
  ) {
    this.loginForm = this._fb.group({
      email: ['jpretamalesv@gmail.com', Validators.required],
      password: ['pass123', Validators.required],
    });
  }

  login() {
    this._loginService.login(this.loginForm.value as LoginForm).subscribe({
      next: ({ access_token }: IGetLoginResponse) => {
        
        localStorage.setItem('access_token', access_token);
        this._router.navigate(['/student-cases']);
        
        
      },
      error:error =>{
        this._messageService.add({ severity: 'error', summary: 'Credenciales incorrectas', detail: 'Aseguresé de ingresar bien sus credenciales' });
      }
    });
  }
  get email() {return this.loginForm.get('email')}
  ngOnInit(): void {}
}
