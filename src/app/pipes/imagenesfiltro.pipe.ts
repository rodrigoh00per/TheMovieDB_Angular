import { Pipe, PipeTransform } from "@angular/core";
//import { PeliculasService } from "../services/peliculas.service";

@Pipe({
  name: "imagenesfiltro"
})
export class ImagenesfiltroPipe implements PipeTransform {
  transform(pelicula: any,poster:boolean = false): any {



    let url = "http://image.tmdb.org/t/p/w500";

if (poster==true){
  return `${url}${pelicula.poster_path}`;
}



    if (pelicula.backdrop_path) {
      // console.log(pelicula.backdrop_path);
      return `${url}${pelicula.backdrop_path}`;
    } else {
      if (pelicula.poster_path) {
        // console.log(pelicula.poster_path);
        return `${url}${pelicula.poster_path}`;
      } else {
        return "assets/img/noimage.jpg";
      }
    }
  }
}
