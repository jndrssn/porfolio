import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { Sproyecto } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];
  
  constructor(private sProyecto: Sproyecto, private tokenService: TokenService ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;

    }
  }

  cargarProyecto():void{
    this.sProyecto.lista().subscribe(
      data => {this.proyecto = data;})
      
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err => {
          alert ("No se puede borrar el proyecto");
        }
      )
    }
  }

}
