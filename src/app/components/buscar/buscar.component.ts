import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.css"],
  providers: [PeliculasService]
})
export class BuscarComponent implements OnInit {
  private pel_buscar: string;

  constructor(
    private _peliculasService: PeliculasService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.pel_buscar = "";
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(bustext => {
      console.log(bustext);
      this.pel_buscar = bustext.valbus;
      this.buscarpeli();
    });
  }

  buscarpeli() {
    if (this.pel_buscar=="") {
      return "";
    } else {
      this._peliculasService.busquedaPeli(this.pel_buscar).subscribe(data => {
        console.log(data);
      });
    }
  }
}
