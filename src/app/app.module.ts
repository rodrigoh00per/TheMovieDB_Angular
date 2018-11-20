import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { JsonpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { appRouting } from "src/app/app.routing";
import { ImagenesfiltroPipe } from "./pipes/imagenesfiltro.pipe";
import { GaleriaComponent } from "./components/home/galeria.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    ImagenesfiltroPipe,
    GaleriaComponent
  ],
  imports: [BrowserModule, JsonpModule, appRouting, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
