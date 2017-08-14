import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public images = [
      'https://s-media-cache-ak0.pinimg.com/736x/5b/88/21/5b882187367e54b02eac567e4960aab7--brisket-sandwich-brisket-sliders.jpg',
      'https://pbs.twimg.com/media/Bdh9EUVCIAALhab.jpg',
      'https://s-media-cache-ak0.pinimg.com/736x/7c/59/12/7c591294acfaa7b65060780d1d837157--lamb-sliders-chicken-sliders.jpg',
      'https://s-media-cache-ak0.pinimg.com/736x/4a/0d/38/4a0d38a7a7d2a4fd5f75707689a05175--slider-recipes-dinner-rolls.jpg',
      'https://s-media-cache-ak0.pinimg.com/736x/7c/59/12/7c591294acfaa7b65060780d1d837157--lamb-sliders-chicken-sliders.jpg',
      'https://s-media-cache-ak0.pinimg.com/736x/4a/0d/38/4a0d38a7a7d2a4fd5f75707689a05175--slider-recipes-dinner-rolls.jpg'
  ]
  constructor(public navCtrl: NavController) {

  }

}
