import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private populares: any[];
  private encartelera: any[];
  private ninospelis:any [];

  constructor(private _peliculaService: PeliculasService) {
    this._peliculaService.getPopulares().subscribe(pop => {
    //  console.log(pop);
      this.populares = pop;
    });

    this._peliculaService.getenCartelera().subscribe(cart => {
       console.log(cart);
      this.encartelera = cart;
    });

    this._peliculaService.getPopuNiños().subscribe(ninos => {
      // console.log(cart);
      this.ninospelis = ninos;
    });
  }

  ngOnInit() {
    // setTimeout(() => {
    // console.log("----");
    // console.log(this.populares);
    // }, 1000);
  }
}
