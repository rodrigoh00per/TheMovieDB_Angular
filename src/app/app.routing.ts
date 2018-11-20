import { RouterModule, Routes } from "@angular/router";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "pelicula/:id/:pag", component: PeliculaComponent },
  { path: "pelicula/:id/:pag/:texto", component: PeliculaComponent },
  { path: "buscar", component: BuscarComponent },
  { path: "buscar/:valbus", component: BuscarComponent },
  { path: "home", component: HomeComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const appRouting = RouterModule.forRoot(routes);
