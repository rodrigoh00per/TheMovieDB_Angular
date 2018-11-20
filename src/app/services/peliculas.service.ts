import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private api_key: string;
  private url: string;
  private desde_f: Date;
  private hasta_f: Date;
  private desde_f_str: string;
  private hasta_f_str: string;
  pelis_bus: any[];

  constructor(private jsonp: Jsonp) {
    this.api_key = "6b282d3a39d81f9ef649c9c07ed15357";
    this.url = "https://api.themoviedb.org/3";
    this.desde_f = new Date();
    this.hasta_f = new Date();
    this.hasta_f.setDate(this.hasta_f.getDate() + 7); //aqui le aumentamos 7 dias.
    this.desde_f_str = `${this.desde_f.getFullYear()}-${this.desde_f.getMonth() +
      1}-${this.desde_f.getDate()}`;

    this.hasta_f_str = `${this.hasta_f.getFullYear()}-${this.hasta_f.getMonth() +
      1}-${this.hasta_f.getDate()}`;

    console.log(this.desde_f_str);
  }

  //regresar un json del api
  //----REGRESA LAS PELICULAS MAS POPULARES HASTA EL MOMENTO
  getPopulares(): Observable<any> {
    let urlenv = `${this.url}/discover/movie?sort_by=popularity.desc&api_key=${
      this.api_key
    }&language=es&callback=JSONP_CALLBACK`;
    //console.log(urlenv);

    return this.jsonp.get(urlenv).pipe(
      map(data => {
        return data.json().results;
      })
    );
  }
  getPopuNiños(): Observable<any> {
    let urlenv = `${
      this.url
    }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.api_key
    }&language=es&callback=JSONP_CALLBACK`;
    //console.log(urlenv);

    return this.jsonp.get(urlenv).pipe(
      map(data => {
        return data.json().results;
      })
    );
  }

  busquedaPeli(valor: string): Observable<any> {
    let urlenv = `${
      this.url
    }/search/movie?query=${valor}&sort_by=popularity.desc&api_key=${
      this.api_key
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(urlenv).pipe(
      map(data => {
        this.pelis_bus = data.json().results;
        return data.json().results;
      })
    );
  }

  //este es el servicio que regresa una sola peli
  buscarUnaPeli(id: number):Observable<any> {
    let url = `${this.url}/movie/${id}?api_key=${
      this.api_key
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(
      map(data => {
        return data.json();
      })
    );
  }

  //REGRESA LAS PELICULAS QUE ESTAN AHORITA EN CARTELERA
  getenCartelera() {
    let urlenv = `${this.url}/discover/movie?primary_release_date.gte=${
      this.desde_f_str
    }&primary_release_date.lte=${this.hasta_f_str}&api_key=${
      this.api_key
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(urlenv).pipe(
      map(data => {
        return data.json().results;
      })
    );
  }
}
