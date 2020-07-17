import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $: any;
var hbspt: any 
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

  sendForm=false;
    
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

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit() {
    
    
    

  }

  ngOnInit() {
  	$(".fancy").fancybox({
      type: "iframe",
    });
 
  }

 submitToHubSpot = (event) => {
 console.log("aqui lo estoy enviando ");
        let url: string = "https://api.hsforms.com/submissions/v3/integration/submit/5922407/67ea2165-b2ed-44e9-b81b-b74cb629217b";
        var param: any = {
            fields: [
                {
                    "name": "email",
                    "value": event.target.email.value
                },
                {
                    "name": "firstname",
                    "value": event.target.name.value
                },
                {
                    "name": "lastname",
                    "value":  event.target.lastname.value
                },
                {
                    "name": "message",
                    "value":  event.target.message.value
                } 
            ]
        } 
        // http.post is a wrapper for AJAX
        this.httpClient.post(url , param).subscribe(response => {
          console.log(response);
          Swal.fire('Gracias por enviar tu mensaje', 'Se ha enviado tu mensaje con éxito', 'success');

         
          (<HTMLFormElement>document.getElementById("contactForm")).reset();

         })
      
        event.preventDefault();

    }
    
  
   

}
