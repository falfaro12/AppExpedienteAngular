import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';

@Component({
  selector: 'app-usuario-index',
  templateUrl: './usuario-index.component.html',
  styleUrls: ['./usuario-index.component.css']
})
export class UsuarioIndexComponent implements OnInit {
  UsuarioActual: UsuarioLogin;

  constructor(
    private router: Router,
    private autentification: AuthenticationServiceService
  ) {
    this.autentification.currentUser.subscribe(x => (this.UsuarioActual = x));
  }

  ngOnInit() {
  }

}
