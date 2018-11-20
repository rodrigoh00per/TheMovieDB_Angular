import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styleUrls: ["./pelicula.component.css"]
})
export class PeliculaComponent implements OnInit {
  private pelicula: any;
  private pagina: string;
  private texto_bus :string ;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService
  ) {
    //se recibe id y pag
    this._activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      let id: number = params.id;
      this.pagina = params.pag;
      if (params.texto){
        this.texto_bus= params.texto;
      }

      this._peliculasService.buscarUnaPeli(id).subscribe(peli => {
        console.log(peli);
        this.pelicula = peli;
      });
    });
  }

  ngOnInit() {}
}
