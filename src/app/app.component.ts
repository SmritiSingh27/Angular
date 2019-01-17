import { Component } from '@angular/core';
import { ListItemService } from './items.service';
import { ItemDetails } from './shared/items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemClicked = false;
  itemSelected: ItemDetails;
  constructor(private itemDetailService: ListItemService) { }

  ngOnInit() {
    this.itemDetailService.itemSelected.subscribe(
      (itemSelected : ItemDetails)=>{
          if(itemSelected!=null)
            this.itemClicked = true;
      }
    );
  }

}
