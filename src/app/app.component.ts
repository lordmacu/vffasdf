import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  slides = [
    { img: '/assets/instituto_baritrioco.png' },
    { img: '/assets/Cancerlogico-Pegasi.png' },
    { img: '/assets/Roche-Pegasi.png' },
    { img: '/assets/Posta-Central-chile-Pegasi.png' },
    { img: '/assets/Novartis-Pegasi.png' },
    { img: '/assets/MedicalNET-PEGASI.png' },
    { img: '/assets/Centro-Medico-regional-Aguasvivas-PEGASI.png' } 
  ];
  
  slidesTwo = [
    { img: '/assets/1.png' },
    { img: '/assets/2.png' },
    { img: '/assets/3.png' },
    { img: '/assets/Katapult-Pegasi.png' },
    { img: '/assets/5.png' },
    { img: '/assets/Startuphealthlogo_tm-1024x250-1.png' },
    
  ];
  
  slidesTrhee = [
    { img: '/assets/Challenge-Cup.png' },
    { img: '/assets/SOCAP.png' },
    { img: '/assets/HealthTech-Builders-Lab.png' },
    { img: '/assets/Wayra.png' },
    { img: '/assets/Innovation-Awards.png' },
    { img: '/assets/Desafios-en-Cancer.png' },
    { img: '/assets/Global-Pitch.png' },
    
  ];

    
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'><i class='icon icon-arrow-right'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i class='icon icon-arrow-left'></i></div>",
    "dots": false,
    "infinite": true,
    "autoplay": true,
     variableWidth: true,

    "autoplaySpeed": 2000 
  };

  constructor() { }

  ngOnInit() {
  	$(".fancy").fancybox({
      type: "iframe",
    });
  }

  
   

}
