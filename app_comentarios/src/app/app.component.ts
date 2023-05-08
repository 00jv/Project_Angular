import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "João";

userData = {
  email: "jvmatosfagundes@gmail.com",
  role: "admin"
}
  title = 'app_comentarios';
}
