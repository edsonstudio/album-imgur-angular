import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  imgLogo: string = './assets/lyncas-logo.png';
  today: number = Date.now();
}
