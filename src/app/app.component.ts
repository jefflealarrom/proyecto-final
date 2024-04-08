import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfume';
  private url = 'https://mockapi.io/projects/661270f095fdb62f24eeaffe'
  perfumes: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchPerfumes()
  }

  fetchPerfumes() {
    this.http.get<any[]>(this.url).subscribe(
      (data) => {
        this.perfumes = data;
        console.log('Perfumes:', this.perfumes)
      },
      (error) => {
        console.error('Error fetching perfumes:', error);
      }
    );
  }
}
