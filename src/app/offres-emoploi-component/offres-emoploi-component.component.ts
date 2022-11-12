import { Emploi } from './../core/articles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emoploi-component',
  templateUrl: './offres-emoploi-component.component.html',
  styleUrls: ['./offres-emoploi-component.component.css']
})
export class OffresEmoploiComponentComponent implements OnInit {
  ListeEmploi!:Emploi[]
  title2:string="offres d'emploi"
  constructor() { }

  ngOnInit(): void {
    this.ListeEmploi  =[
      {reference:'56a',titre:'vendeur',entreprise:'zen',etat:true},
      {reference:'57a',titre:'stylist',entreprise:'zara',etat:false},
      {reference:'58a',titre:'caissier',entreprise:'p&b',etat:true}
    ]
    }
    /*bilan(){
      let s:number;
      for (let i= 0; i < this.ListeEmploi.length; i++) {
        if (this.ListeEmploi[i].etat==true) {
          return s ++

        }


      }
    }*/
  }


