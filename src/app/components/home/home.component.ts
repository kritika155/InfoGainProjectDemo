import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
interface tabData {
  headerText: string;
  order: string;
  tab_identifier: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jsonDataResult: any;
  data: any = [];
  displayData: tabData[] = [];
  inkObject!: tabData;
  linkObject!: tabData;
  printerObject!: tabData;
  constructor(private service: ApiService) {}
  ngOnInit() {
    this.data = this.getTabsData();
    if (this.data) {
      console.log(this.data);
      this.data.forEach((e: any) => {
        const { headerText, order, tab_identifier } = e;
        let a = {
          headerText: headerText,
          order: order,
          tab_identifier: tab_identifier,
        };
        this.displayData.push(a);

        this.displayData.sort((a: any, b: any) => a.order - b.order);
        console.log('Sorted display data', this.displayData);
        this.inkObject = this.displayData[0];
        this.linkObject = this.displayData[1];
        this.printerObject = this.displayData[2];
        console.log('inkObject', this.inkObject);
        console.log('linkObject', this.linkObject);
        console.log('printerObject', this.printerObject);
      });
    }
  }
  getTabsData() {
    return this.service.getData();
  }
}
