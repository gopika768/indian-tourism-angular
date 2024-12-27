import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-curosel',
  imports: [CarouselModule],
  templateUrl: './curosel.component.html',
  styleUrl: './curosel.component.scss'
})
export class CuroselComponent {
customOptions: OwlOptions | undefined;
  

}
