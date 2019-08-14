import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/share/models/Perfil';
import { PerfilService } from 'src/app/share/perfil.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.css']
})
export class DetallePerfilComponent implements OnInit {
  datos: Perfil;
  perfil: any;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perfilService: PerfilService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // suscripción para uso del servicio
    this.perfilService.showPerfil(id).subscribe(
      (respuesta: Perfil) => {
        this.datos = respuesta;
        this.perfil = this.datos.Perfil[0];
        console.log(this.perfil);
      },
      error => (this.error = error)
    );
  }

  ngDoCheck() {
    if (this.datos) {
      this.perfil = this.datos.Perfil[0];
    }
  }
  onBack(): void {
    this.router.navigate(['/MantPerfil']);
  }
}
