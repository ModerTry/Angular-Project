import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  url:string ="../../assets/Images/Floral_Lehenga.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
