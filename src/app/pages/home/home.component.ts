import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CuroselComponent } from "../../ui/curosel/curosel.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CuroselComponent,CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  slidesStore=[
    {
      id:1,
      alt:'tata',
      src:'https://wallpapers.com/images/featured/best-travel-background-04ml2h9wywaoo6ei.jpg'
    },
    {
      id:2,
      alt:'amazon',
      src:'https://wallpaperswide.com/download/iceland_nature_travel_photography-wallpaper-1920x1080.jpg'
    },
    {
      id:3,
      alt:'google',
      src:'https://www.aworldtotravel.com/wp-content/uploads/2018/05/how-to-edit-4k-video-fast-and-hassle-free-a-world-to-travel-2.jpg'
    },
    
  ]


}



