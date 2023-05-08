import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
    name: string = "Victor";
    age: number = 19;
    jobs = "Programador"
    hoobie = ["Escultar musica", "Jogar", "ler"]
    veiculo = {
      moto: "Crosser",
      cilindradas: 150
    }
}
