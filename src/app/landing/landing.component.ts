import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  products = [
    { name: 'Garnier Foundation', image: '../../assets/images/ladies-lingerie-top.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/beauty-set.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/black-white-wrist-watches.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/bright-red-purse-with-gold.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/lipstick-shade-of-red.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/makeup-brush-set.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/pretty-gold-necklace.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/bright-red-purse-with-gold.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/bright-red-purse-with-gold.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/bright-red-purse-with-gold.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/bright-red-purse-with-gold.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/bright-red-purse-with-gold.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/ladies-lingerie-top.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { name: 'Garnier Foundation', image: '../../assets/images/ladies-lingerie-top.jpg', price: 25, description: 'Some quick example text to build on the card title and make up the bulk of the card' },

  ];


  constructor() { }

  ngOnInit() {
  }

}