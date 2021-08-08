import { UsuariosService } from './services/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';

  constructor(private usuarioService: UsuariosService){

    this.usuarioService.obtenerUsuarios().subscribe(res => {
      console.log(res);

    },(err =>{
      console.log(err);

    }))
  }
}
