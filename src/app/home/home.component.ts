import { CommonModule } from '@angular/common';
import { SwiperDirective } from './../swiper.directive';
import {Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation} from '@angular/core';
import {A11y, Mousewheel, Navigation, Pagination, SwiperOptions} from 'swiper';


@Component({
  selector: 'app-manage-address',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ CommonModule, SwiperDirective],
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomeComponent  {
  sliders: string[] = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
    'Test 5',
    'Test 6',
    'Test 7',
    'Test 8',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
    'Test 9',
  ]

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    navigation: true,
    grid: {
      rows:2
    },
    // pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 2,
    centeredSlides: false,
    breakpoints: {
      400: {
        slidesPerView: 1,
        centeredSlides: true
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false
      },
      992: {
        slidesPerView: 3,
        centeredSlides: false
      }
    }
  }
}
