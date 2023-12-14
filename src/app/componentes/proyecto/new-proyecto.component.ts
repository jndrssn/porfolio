import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { Sproyecto } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = ' ';
  descripcionP: string = ' ';
  img: string = ' ';
  constructor(private sProyecto: Sproyecto, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyN = new Proyecto(this.nombreP, this.descripcionP, this.img);
    this.sProyecto.save(proyN).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
