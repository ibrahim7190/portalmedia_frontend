import { Component, OnInit } from '@angular/core';
import { ActivitesService } from 'src/app/shared/activites.service';



@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent {


activites:any;

constructor(public activit:ActivitesService){

  this.activit.get().subscribe(
    (res: any) => {
      this.activites = res.Data;
      console.log(this, this.activites);
    }
  )

}



}
