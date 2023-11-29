import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-your-printer-connection',
  templateUrl: './your-printer-connection.component.html',
  styleUrls: ['./your-printer-connection.component.css'],
})
export class YourPrinterConnectionComponent {
  contentBoxData: Array<any> = [];
  tab_identifier: any;
  contentbox: any;
  contentbox1: any;
  contentbox2: any;
  contentbox3: any;
  contentbox4: any;
  contentbox5: any;
  contentbox6: any;
  contentbox7: any;
  contentbox8: any;
  contentbox9: any;
  contentbox10: any;
  headerText: any;
  dynamicContent: any;
  jsonDataResult: any;
  data: any = [];
  displayData: any = [];
  inkObject!: any;
  linkObject!: any;
  printerObject!: any;
  objectdata: any;
  constructor(
    private service: ApiService,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.data = this.dataService.getTabsData();
    if (this.data) {
      console.log(this.data);
      this.displayData = this.dataService.getdisplayData(this.data);
      console.log('display data', this.displayData);
      this.tab_identifier = 'yourprinterconnections';
      if (this.displayData.length == 3) {
        this.displayData = this.dataService.sortData(this.displayData);
        // this.displayData.sort((a: any, b: any) => a.order - b.order);
        console.log('Sorted display data', this.displayData);
        this.inkObject = this.displayData[0];

        console.log('inkObject', this.inkObject);
        this.linkObject = this.displayData[1];
        console.log('linkObject', this.linkObject);
        this.printerObject = this.displayData[2];
        this.objectdata = this.printerObject;
        console.log('printerObject', this.printerObject);
      }

      this.updatedHeaderTextContent(this.tab_identifier, this.objectdata);
    }
  }

  updatedHeaderTextContent(tab_identifier: any, objectdata: any) {
    this.contentBoxData = this.dataService.updatedHeaderTextContent(
      tab_identifier,
      objectdata
    );

    let a: any = '';
    if (this.contentBoxData[0].Data) {
      this.contentbox1 = this.contentBoxData[0];
      a = <HTMLElement>document.getElementById('contentbox1');
      a.innerHTML = this.contentbox1.Data;
    } else {
      this.contentbox1 = '';
    }
    if (this.contentBoxData[1].Data) {
      this.contentbox2 = this.contentBoxData[1];
      a = <HTMLElement>document.getElementById('contentbox2');
      a.innerHTML = this.contentbox2.Data;
    } else {
      this.contentbox2 = '';
    }
    if (this.contentBoxData[2].Data) {
      this.contentbox3 = this.contentBoxData[2];
      a = <HTMLElement>document.getElementById('contentbox3');
      a.innerHTML = this.contentbox3.Data;
    } else {
      this.contentbox3 = '';
    }
    if (this.contentBoxData[3].Data != undefined) {
      this.contentbox4 = this.contentBoxData[3];
      a = <HTMLElement>document.getElementById('contentbox4');
      a.innerHTML = this.contentbox4.Data;
    } else {
      this.contentbox4 = '';
    }
    if (this.contentBoxData[4].Data != undefined) {
      this.contentbox5 = this.contentBoxData[4];
      a = <HTMLElement>document.getElementById('contentbox5');
      a.innerHTML = this.contentbox5.Data;
    } else {
      this.contentbox5 = '';
    }
    if (this.contentBoxData[5].Data) {
      this.contentbox6 = this.contentBoxData[5];
      a = <HTMLElement>document.getElementById('contentbox6');
      a.innerHTML = this.contentbox6.Data;
    } else {
      this.contentbox6 = '';
    }
    if (this.contentBoxData[6].Data) {
      this.contentbox7 = this.contentBoxData[6];
      a = <HTMLElement>document.getElementById('contentbox7');
      a.innerHTML = this.contentbox7.Data;
    } else {
      this.contentbox7 = '';
    }
    if (this.contentBoxData[7].Data) {
      this.contentbox8 = this.contentBoxData[7];
      a = <HTMLElement>document.getElementById('contentbox8');
      a.innerHTML = this.contentbox8.Data;
    } else {
      this.contentbox8 = '';
    }
    if (this.contentBoxData[8].Data) {
      this.contentbox9 = this.contentBoxData[8];
      a = <HTMLElement>document.getElementById('contentbox9');
      a.innerHTML = this.contentbox9.Data;
    } else {
      this.contentbox9 = '';
    }
    if (this.contentBoxData[9].Data) {
      this.contentbox10 = this.contentBoxData[9];
      a = <HTMLElement>document.getElementById('contentbox10');
      a.innerHTML = this.contentbox10.Data;
    } else {
      this.contentbox10 = '';
    }
    if (tab_identifier != 'yourprinterconnections') {
      this.router.navigate([tab_identifier]);
    }
  }
}
