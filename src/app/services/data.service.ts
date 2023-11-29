import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  getTabsData() {
    return this.service.getData();

    console.log('--- result :: ', this.data);
  }
  sortData(displayData: any) {
    this.displayData = displayData;
    this.displayData.sort((a: any, b: any) => a.order - b.order);
    return this.displayData;
  }
  getdisplayData(displayData: any) {
    this.data.forEach((e: any) => {
      const { headerText, order, tab_identifier } = e;
      this.displayData.push(e);
    });
    return displayData;
  }
  updatedHeaderTextContent(tab_identifier: any, objectData: any) {
    this.contentBoxData = [];
    this.tab_identifier = tab_identifier;
    console.log('tab_identifier:', this.tab_identifier);
    console.log('data:', objectData);
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
    return this.contentBoxData;
  }
}
