
import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/share/models/usuario-Login';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UsuarioActual: UsuarioLogin;

  constructor(
    private router: Router,
    private autentification: AuthenticationServiceService
  ) {
    this.autentification.currentUser.subscribe(x => (this.UsuarioActual = x));
  }

  ngOnInit() {}

  logout() {
    this.autentification.logout();
    this.router.navigate(['/usuario/login']);
  }
}
