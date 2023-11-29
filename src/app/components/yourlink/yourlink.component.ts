import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
interface tabData {
  headerText: string;
  order: string;
  tab_identifier: string;
}
@Component({
  selector: 'app-yourlink',
  templateUrl: './yourlink.component.html',
  styleUrls: ['./yourlink.component.css'],
})
export class YourlinkComponent implements OnInit {
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
  constructor(private service: ApiService) {}
  ngOnInit() {
    this.getTabsData();
    if (this.data) {
      console.log(this.data);
      this.data.forEach((e: any) => {
        const { headerText, order, tab_identifier } = e;
        let a = {
          headerText: headerText,
          order: order,
          tab_identifier: tab_identifier,
        };
        this.displayData.push(e);
      });
      this.tab_identifier = 'yourlink';
      if (this.displayData.length == 3) {
        this.displayData.sort((a: any, b: any) => a.order - b.order);
        console.log('Sorted display data', this.displayData);
        this.inkObject = this.displayData[0];
        this.objectdata = this.inkObject;
        console.log('inkObject', this.inkObject);
        this.linkObject = this.displayData[1];
        console.log('linkObject', this.linkObject);
        this.printerObject = this.displayData[2];
        console.log('printerObject', this.printerObject);
      }

      this.updatedHeaderTextContent(this.tab_identifier, this.objectdata);
    }
  }
  getTabsData() {
    this.data = this.service.getStudents();
    // .subscribe((res) => {
    //   this.jsonDataResult = res;
    //   console.log('--- json :: ', this.jsonDataResult);

    // this.jsonDataResult.data.forEach((element: any) => {
    //   this.data.push(element);
    // });

    //   console.log('--- result :: ', this.data);
    // });
    console.log('--- result :: ', this.data);
  }
  updatedHeaderTextContent(tab_identifier: any, objectData: any) {
    this.contentBoxData = [];
    this.tab_identifier = tab_identifier;
    console.log('tab_identifier:', this.tab_identifier);
    console.log('data:', objectData);
    debugger;
    let {
      contentbox1_Data,
      contentbox1_Position,
      contentbox1_Source,
      contentbox1_Title,
      contentbox1_Type,
    } = objectData;
    let {
      contentbox2_Data,
      contentbox2_Position,
      contentbox2_Source,
      contentbox2_Title,
      contentbox2_Type,
    } = objectData;
    let {
      contentbox3_Data,
      contentbox3_Position,
      contentbox3_Source,
      contentbox3_Title,
      contentbox3_Type,
    } = objectData;
    let {
      contentbox4_Data,
      contentbox4_Position,
      contentbox4_Source,
      contentbox4_Title,
      contentbox4_Type,
    } = objectData;
    let {
      contentbox5_Data,
      contentbox5_Position,
      contentbox5_Source,
      contentbox5_Title,
      contentbox5_Type,
    } = objectData;
    let {
      contentbox6_Data,
      contentbox6_Position,
      contentbox6_Source,
      contentbox6_Title,
      contentbox6_Type,
    } = objectData;
    let {
      contentbox7_Data,
      contentbox7_Position,
      contentbox7_Source,
      contentbox7_Title,
      contentbox7_Type,
    } = objectData;
    let {
      contentbox8_Data,
      contentbox8_Position,
      contentbox8_Source,
      contentbox8_Title,
      contentbox8_Type,
    } = objectData;
    let {
      contentbox9_Data,
      contentbox9_Position,
      contentbox9_Source,
      contentbox9_Title,
      contentbox9_Type,
    } = objectData;
    let {
      contentbox10_Data,
      contentbox10_Position,
      contentbox10_Source,
      contentbox10_Title,
      contentbox10_Type,
    } = objectData;
    let Position1 = contentbox1_Position.split('|');
    contentbox1_Position = Position1[1];
    console.log('contentbox1_Position:', contentbox1_Position);
    this.contentbox = {
      Data: contentbox1_Data,
      position: contentbox1_Position,
      Source: contentbox1_Source,
      Title: contentbox1_Title,
      Type: contentbox1_Type,
    };

    console.log('contentbox1:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position2 = contentbox2_Position.split('|');
    contentbox2_Position = Position2[1];
    console.log('contentbox2_Position:', contentbox2_Position);
    this.contentbox = {
      Data: contentbox2_Data,
      position: contentbox2_Position,
      Source: contentbox2_Source,
      Title: contentbox2_Title,
      Type: contentbox2_Type,
    };
    console.log('contentbox2:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position3 = contentbox3_Position.split('|');
    contentbox3_Position = Position3[1];
    console.log('contentbox3_Position:', contentbox3_Position);
    this.contentbox = {
      Data: contentbox3_Data,
      position: contentbox3_Position,
      Source: contentbox3_Source,
      Title: contentbox3_Title,
      Type: contentbox3_Type,
    };
    console.log('contentbox3:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position4 = contentbox4_Position.split('|');
    contentbox4_Position = Position4[1];
    console.log('contentbox4_Position:', contentbox4_Position);
    this.contentbox = {
      Data: contentbox4_Data,
      position: contentbox4_Position,
      Source: contentbox4_Source,
      Title: contentbox4_Title,
      Type: contentbox4_Type,
    };
    console.log('contentbox4:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position5 = contentbox5_Position.split('|');
    contentbox5_Position = Position5[1];
    console.log('contentbox5_Position:', contentbox5_Position);
    this.contentbox = {
      contentbox5_Data: contentbox5_Data,
      position: contentbox5_Position,
      Source: contentbox5_Source,
      Title: contentbox5_Title,
      Type: contentbox5_Type,
    };
    console.log('contentbox5:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position6 = contentbox6_Position.split('|');
    contentbox6_Position = Position6[1];
    console.log('contentbox6_Position:', contentbox6_Position);
    this.contentbox = {
      Data: contentbox6_Data,
      position: contentbox6_Position,
      Source: contentbox6_Source,
      Title: contentbox6_Title,
      Type: contentbox6_Type,
    };
    console.log('contentbox6:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position7 = contentbox7_Position.split('|');
    contentbox7_Position = Position7[1];
    console.log('contentbox7_Position:', contentbox7_Position);
    this.contentbox = {
      contentbox7_Data: contentbox7_Data,
      parentosition: contentbox7_Position,
      contentbox7_Source: contentbox7_Source,
      Title: contentbox7_Title,
      Type: contentbox7_Type,
    };
    console.log('contentbox7:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position8 = contentbox8_Position.split('|');
    contentbox8_Position = Position8[1];
    console.log('contentbox8_Position:', contentbox8_Position);
    this.contentbox = {
      Data: contentbox8_Data,
      position: contentbox8_Position,
      Source: contentbox8_Source,
      Title: contentbox8_Title,
      Type: contentbox8_Type,
    };
    console.log('contentbox8:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position9 = contentbox9_Position.split('|');
    contentbox9_Position = Position9[1];
    console.log('contentbox9_Position:', contentbox9_Position);
    this.contentbox = {
      Data: contentbox9_Data,
      position: contentbox9_Position,
      Source: contentbox9_Source,
      Title: contentbox9_Title,
      Type: contentbox9_Type,
    };
    console.log('contentbox9:', this.contentbox);
    this.contentBoxData.push(this.contentbox);

    let Position10 = contentbox10_Position.split('|');
    contentbox10_Position = Position10[1];
    console.log('contentbox10_Position:', contentbox10_Position);
    this.contentbox = {
      Data: contentbox10_Data,
      position: contentbox10_Position,
      Source: contentbox10_Source,
      Title: contentbox10_Title,
      Type: contentbox10_Type,
    };
    console.log('contentbox10:', this.contentbox);

    this.contentBoxData.push(this.contentbox);

    this.contentBoxData.sort((a: any, b: any) => a.position - b.position);
    console.log('contentBoxData:', this.contentBoxData);
    this.contentbox1 = this.contentBoxData[0];
    let a: any = '';
    a = <HTMLElement>document.getElementById('contentbox1');
    a.innerHTML = this.contentbox1.Data;

    this.contentbox2 = this.contentBoxData[1];
    a = <HTMLElement>document.getElementById('contentbox2');
    a.innerHTML = this.contentbox2.Data;

    this.contentbox3 = this.contentBoxData[2];
    a = <HTMLElement>document.getElementById('contentbox3');
    a.innerHTML = this.contentbox3.Data;

    this.contentbox4 = this.contentBoxData[3];
    a = <HTMLElement>document.getElementById('contentbox4');
    a.innerHTML = this.contentbox4.Data;

    this.contentbox5 = this.contentBoxData[4];
    a = <HTMLElement>document.getElementById('contentbox5');
    a.innerHTML = this.contentbox5.Data;

    this.contentbox6 = this.contentBoxData[5];
    a = <HTMLElement>document.getElementById('contentbox6');
    a.innerHTML = this.contentbox6.Data;

    this.contentbox7 = this.contentBoxData[6];
    a = <HTMLElement>document.getElementById('contentbox7');
    a.innerHTML = this.contentbox7.Data;

    this.contentbox8 = this.contentBoxData[7];
    a = <HTMLElement>document.getElementById('contentbox8');
    a.innerHTML = this.contentbox8.Data;

    this.contentbox9 = this.contentBoxData[8];
    a = <HTMLElement>document.getElementById('contentbox9');
    a.innerHTML = this.contentbox9.Data;

    this.contentbox10 = this.contentBoxData[9];
    a = <HTMLElement>document.getElementById('contentbox10');
    a.innerHTML = this.contentbox10.Data;
  }
}
