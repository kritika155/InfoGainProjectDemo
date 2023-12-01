import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {
  updatedHeaderTextContent,
  sortData,
  getdisplayData,
  updateContentBox,
  updateContentBoxHtmlDom,
} from '../commons/helper-functions';
import { Store } from '@ngrx/store';
import * as Tab from '../../pages/commons/stores/actions/tab.action';
@Component({
  selector: 'app-your-printer-connection',
  templateUrl: './your-printer-connection.component.html',
  styleUrls: ['./your-printer-connection.component.css'],
})
export class YourPrinterConnectionComponent {
  contentBoxData: Array<any> = [];
  tab_identifier: any;
  contentBox: any;
  contentBox1: any;
  contentBox2: any;
  contentBox3: any;
  contentBox4: any;
  contentBox5: any;
  contentBox6: any;
  contentBox7: any;
  contentBox8: any;
  contentBox9: any;
  contentBox10: any;
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {}
  ngOnInit() {
    this.data = this.service.getData();
    this.store.dispatch(new Tab.GetTabData());
    this.store.select('tab').subscribe(
      (response) => {
        console.log(response);
        console.log(response);
        const { tab } = response;
        const { data } = tab;
        console.log(data);
        this.data = data;
        console.log(this.data);
        if (this.data) {
          console.log(this.data);
          this.displayData = getdisplayData(this.data);
          console.log('display data', this.displayData);
          this.tab_identifier = 'yourprinterconnections';
          if (this.displayData.length == 3) {
            this.displayData = sortData(this.displayData);
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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatedHeaderTextContent(tab_identifier: any, objectdata: any) {
    this.contentBoxData = updatedHeaderTextContent(tab_identifier, objectdata);

    let a: any = '';
    this.contentBox1 = updateContentBox(
      this.contentBoxData[0],
      this.contentBox1
    );
    a = 'contentbox1';
    a = updateContentBoxHtmlDom(a, this.contentBox1.Data);

    this.contentBox2 = updateContentBox(
      this.contentBoxData[1],
      this.contentBox2
    );
    a = 'contentbox2';
    a = updateContentBoxHtmlDom(a, this.contentBox2.Data);

    this.contentBox3 = updateContentBox(
      this.contentBoxData[2],
      this.contentBox3
    );
    a = 'contentbox3';
    a = updateContentBoxHtmlDom(a, this.contentBox3.Data);

    this.contentBox4 = updateContentBox(
      this.contentBoxData[3],
      this.contentBox4
    );
    a = 'contentbox4';
    a = updateContentBoxHtmlDom(a, this.contentBox4.Data);

    this.contentBox5 = updateContentBox(
      this.contentBoxData[4],
      this.contentBox5
    );
    a = 'contentbox5';
    a = updateContentBoxHtmlDom(a, this.contentBox5.Data);

    this.contentBox6 = updateContentBox(
      this.contentBoxData[5],
      this.contentBox6
    );
    a = 'contentbox6';
    a = updateContentBoxHtmlDom(a, this.contentBox6.Data);

    this.contentBox7 = updateContentBox(
      this.contentBoxData[6],
      this.contentBox7
    );
    a = 'contentbox7';
    a = updateContentBoxHtmlDom(a, this.contentBox7.Data);

    this.contentBox8 = updateContentBox(
      this.contentBoxData[7],
      this.contentBox8
    );
    a = 'contentbox8';
    a = updateContentBoxHtmlDom(a, this.contentBox8.Data);

    this.contentBox9 = updateContentBox(
      this.contentBoxData[8],
      this.contentBox9
    );
    a = 'contentbox9';
    a = updateContentBoxHtmlDom(a, this.contentBox9.Data);

    this.contentBox10 = updateContentBox(
      this.contentBoxData[9],
      this.contentBox10
    );
    a = 'contentbox10';
    a = updateContentBoxHtmlDom(a, this.contentBox10.Data);

    // let connectToWiFIsh: any = <HTMLElement>(
    //   document.getElementById('connect-to-wifi-ish_3259780-2802006-16')
    // );
    // connectToWiFIsh.title = 'check your wi-fi connection';
    // let connection: any = <HTMLElement>(
    //   document.getElementById('connection-REFIDNS35151578')
    // );
    // connection.title = 'Cannot connect to Web Services';

    // let connectionish: any = <HTMLElement>(
    //   document.getElementById('connection-ish_3259780-2802006-16')
    // );
    // connectionish.title = 'My printer is not connected to the internet';

    // let connectionrelwireless: any = <HTMLElement>(
    //   document.getElementById('connection-rel-wireless')
    // );
    // connectionrelwireless.title =
    //   'Find the wireless network password or PIN to connect an HP printer';
    // let connectionreleligibleprinters: any = <HTMLElement>(
    //   document.getElementById('connection-rel-eligible-printers')
    // );
    // connectionreleligibleprinters.title =
    //   'Which printers are eligible for HP Instant Ink?';
    // let img: any = connection.childNodes;
    // console.log('child Nodes:', img);
    // img[1].alt = 'Cannot connect to Web Services';

    // let contentboxId: any = <HTMLElement>document.getElementById('contentbox4');
    // const node = document.createElement('div');
    // node.className = 'card';
    // const textnode = document.createTextNode(this.contentBox4.Data);
    // node.appendChild(textnode);
    // contentboxId.appendChild(node);

    if (tab_identifier != 'yourprinterconnections') {
      this.router.navigate([tab_identifier]);
    }
  }
}
