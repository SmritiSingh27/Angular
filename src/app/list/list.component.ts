import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../items.service';
import { ItemDetails } from '../shared/items.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items : ItemDetails[];
  item : ItemDetails;
  constructor(private itemDetailService : ListItemService) { }

  ngOnInit() {
    this.items = this.itemDetailService.getItemList();
  }

  onItemClick(index : number){
    this.item = this.itemDetailService.getItemDetails(index);
    this.itemDetailService.itemSelected.emit(this.item);
  }
}
