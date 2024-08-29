import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layput/header/header.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  title = 'Pradeep Technology';

  baseUrl = 'https://localhost:7002/'
  private http = inject(HttpClient)

  ngOnInit(): void {

    this.http.get(this.baseUrl + 'Products').subscribe({
      next: data => alert(data),
      error: error => alert(error),
      complete: () => console.log('complete')
    })

  }


}
