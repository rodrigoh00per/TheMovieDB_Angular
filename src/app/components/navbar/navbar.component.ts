import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private _router:Router) {}

  ngOnInit() {}

  buscarpeli(nompeli: string) {
   
    if (nompeli.length<1){
return;
    }
    else {
      console.log(nompeli);
      
      this._router.navigate(['buscar',nompeli]);
    }

  }
}
