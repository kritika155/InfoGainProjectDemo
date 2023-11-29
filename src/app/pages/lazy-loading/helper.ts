import mockdata from '../../../assets/json/data.json';
import { tabData } from '../../models/tabData.model';
let displayData: tabData[] = [];
let yourlink = '';
let yourinstantinkaccount = '';
let yourprinterconnections = '';
let data: any = '';
export function getData() {
  return mockdata.data;
}
export function getAppLinkData() {
  data = getData();
  data.forEach((e: any) => {
    const { headerText, order, tab_identifier } = e;
    let a = {
      headerText: headerText,
      order: order,
      tab_identifier: tab_identifier,
    };
    displayData.push(a);
    console.log(displayData);
  });
  displayData.sort((a: any, b: any) => a.order - b.order);
  console.log('Sorted display data', displayData);
  return displayData;
}
