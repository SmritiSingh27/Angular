import { Component, OnInit } from '@angular/core';
import { ItemDetails } from '../shared/items.model';
import { ListItemService } from '../items.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
 itemSelected: ItemDetails;
  constructor(private itemDetailService: ListItemService) { }

  ngOnInit() {
    this.itemSelected = this.itemDetailService.getItemDetails(0);
    this.itemDetailService.itemSelected.subscribe(
      (item : ItemDetails)=>{
          this.itemSelected = item;
      }
    );
    
  }

}
