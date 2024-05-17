import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  cards: any[] = [];

  constructor(private  card:CardService) { }

  ngOnInit(): void {
    this.getAllMagazines();
  }

  getAllMagazines() {
    this.card.getAllMagazines().subscribe((data)=>{
      this.cards=data.Data
   },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteMagazine(magazineId: number) {
    this.card.deleteMagazine(magazineId).subscribe(
      (response) => {
        console.log('Magazine deleted successfully');
        this.getAllMagazines(); // Refresh magazine list after deletion
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
