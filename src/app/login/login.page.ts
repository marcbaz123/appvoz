import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  img:string;
formularioLogin: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioLogin= this.fb.group({
      'nombre':new FormControl("", Validators.required),
      'user':new FormControl("", Validators.required),
      'password':new FormControl("", Validators.required),
    })
  }
ngOnInit(){
this.img='C:\Users\Marcelo\Work\appvoz\src\assets\icon\favicon.png'
}
}
