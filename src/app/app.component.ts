import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "./services/peliculas.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [PeliculasService]
})
export class AppComponent {
  

  constructor() {


  
  }

  ngOnInit() {
    // console.log(this.valorsitos);
  }
}
