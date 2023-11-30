let contentBoxData: Array<any> = [];
let tab_identifier: any;
let contentBox: any;
let contentBox1: any;
let contentBox2: any;
let contentBox3: any;
let contentBox4: any;
let contentBox5: any;
let contentBox6: any;
let contentBox7: any;
let contentBox8: any;
let contentBox9: any;
let contentBox10: any;
let headerText: any;
let dynamicContent: any;
let jsonDataResult: any;
let data: any = [];
let displayData: any = [];
let inkObject!: any;
let linkObject!: any;
let printerObject!: any;
let objectdata: any;

export function sortData(displayData: any) {
  displayData = displayData;
  displayData.sort((a: any, b: any) => a.order - b.order);
  return displayData;
}
export function getdisplayData(data: any) {
  displayData = [];
  data.forEach((e: any) => {
    const { headerText, order, tab_identifier } = e;
    displayData.push(e);
  });
  return displayData;
}
export function updatedHeaderTextContent(tab_identifier: any, objectData: any) {
  contentBoxData = [];
  tab_identifier = tab_identifier;
  console.log('tab_identifier:', tab_identifier);
  console.log('data:', objectData);
  let {
    contentbox1_Data,
    contentbox1_Position,
    contentbox1_Source,
    contentbox1_Title,
    contentbox1_Type,
    contentbox2_Data,
    contentbox2_Position,
    contentbox2_Source,
    contentbox2_Title,
    contentbox2_Type,
    contentbox3_Data,
    contentbox3_Position,
    contentbox3_Source,
    contentbox3_Title,
    contentbox3_Type,
    contentbox4_Data,
    contentbox4_Position,
    contentbox4_Source,
    contentbox4_Title,
    contentbox4_Type,
    contentbox5_Data,
    contentbox5_Position,
    contentbox5_Source,
    contentbox5_Title,
    contentbox5_Type,
    contentbox6_Data,
    contentbox6_Position,
    contentbox6_Source,
    contentbox6_Title,
    contentbox6_Type,
    contentbox7_Data,
    contentbox7_Position,
    contentbox7_Source,
    contentbox7_Title,
    contentbox7_Type,
    contentbox8_Data,
    contentbox8_Position,
    contentbox8_Source,
    contentbox8_Title,
    contentbox8_Type,
    contentbox9_Data,
    contentbox9_Position,
    contentbox9_Source,
    contentbox9_Title,
    contentbox9_Type,
    contentbox10_Data,
    contentbox10_Position,
    contentbox10_Source,
    contentbox10_Title,
    contentbox10_Type,
  } = objectData;
  contentbox1_Position = splitPosition(contentbox1_Position);
  console.log('contentbox1_Position:', contentbox1_Position);
  contentBox = getContentBox(
    contentbox1_Data,
    contentbox1_Position,
    contentbox1_Source,
    contentbox1_Title,
    contentbox1_Type
  );

  console.log('contentbox1:', contentBox);
  contentBoxData.push(contentBox);

  contentbox2_Position = splitPosition(contentbox2_Position);
  console.log('contentbox2_Position:', contentbox2_Position);
  contentBox = getContentBox(
    contentbox2_Data,
    contentbox2_Position,
    contentbox2_Source,
    contentbox2_Title,
    contentbox2_Type
  );

  console.log('contentbox2:', contentBox);
  contentBoxData.push(contentBox);

  contentbox3_Position = splitPosition(contentbox3_Position);
  console.log('contentbox3_Position:', contentbox3_Position);
  contentBox = getContentBox(
    contentbox3_Data,
    contentbox3_Position,
    contentbox3_Source,
    contentbox3_Title,
    contentbox3_Type
  );
  console.log('contentbox3:', contentBox);
  contentBoxData.push(contentBox);

  contentbox4_Position = splitPosition(contentbox4_Position);
  console.log('contentbox4_Position:', contentbox4_Position);
  contentBox = getContentBox(
    contentbox4_Data,
    contentbox4_Position,
    contentbox4_Source,
    contentbox4_Title,
    contentbox4_Type
  );
  console.log('contentbox4:', contentBox);
  contentBoxData.push(contentBox);

  contentbox5_Position = splitPosition(contentbox5_Position);
  console.log('contentbox5_Position:', contentbox5_Position);
  contentBox = getContentBox(
    contentbox5_Data,
    contentbox5_Position,
    contentbox5_Source,
    contentbox5_Title,
    contentbox5_Type
  );
  console.log('contentbox5:', contentBox);
  contentBoxData.push(contentBox);

  contentbox6_Position = splitPosition(contentbox6_Position);
  console.log('contentbox6_Position:', contentbox6_Position);
  contentBox = getContentBox(
    contentbox6_Data,
    contentbox6_Position,
    contentbox6_Source,
    contentbox6_Title,
    contentbox6_Type
  );
  console.log('contentbox6:', contentBox);
  contentBoxData.push(contentBox);

  contentbox7_Position = splitPosition(contentbox7_Position);
  console.log('contentbox7_Position:', contentbox7_Position);
  contentBox = getContentBox(
    contentbox7_Data,
    contentbox7_Position,
    contentbox7_Source,
    contentbox7_Title,
    contentbox7_Type
  );
  console.log('contentbox7:', contentBox);
  contentBoxData.push(contentBox);

  contentbox8_Position = splitPosition(contentbox8_Position);
  console.log('contentbox8_Position:', contentbox8_Position);
  contentBox = getContentBox(
    contentbox8_Data,
    contentbox8_Position,
    contentbox8_Source,
    contentbox8_Title,
    contentbox8_Type
  );
  console.log('contentbox8:', contentBox);
  contentBoxData.push(contentBox);

  contentbox9_Position = splitPosition(contentbox9_Position);
  console.log('contentbox9_Position:', contentbox9_Position);
  contentBox = getContentBox(
    contentbox9_Data,
    contentbox9_Position,
    contentbox9_Source,
    contentbox9_Title,
    contentbox9_Type
  );
  console.log('contentbox9:', contentBox);
  contentBoxData.push(contentBox);

  contentbox10_Position = splitPosition(contentbox10_Position);
  console.log('contentbox10_Position:', contentbox10_Position);
  contentBox = getContentBox(
    contentbox10_Data,
    contentbox10_Position,
    contentbox10_Source,
    contentbox10_Title,
    contentbox10_Type
  );
  console.log('contentbox10:', contentBox);

  contentBoxData.push(contentBox);

  contentBoxData = sortContentBoxData(contentBoxData);
  console.log('Sorted ContentBoxData:', contentBoxData);
  return contentBoxData;
}
export function splitPosition(contentbox1_Position: any) {
  let Position1 = contentbox1_Position.split('|');
  contentbox1_Position = Position1[1];
  return contentbox1_Position;
}
export function getContentBox(
  contentbox_Data: any,
  contentbox_Position: any,
  contentbox_Source: any,
  contentbox_Title: any,
  contentbox_Type: any
) {
  let contentBox = {
    Data: contentbox_Data,
    position: contentbox_Position,
    Source: contentbox_Source,
    Title: contentbox_Title,
    Type: contentbox_Type,
  };
  return contentBox;
}
export function sortContentBoxData(contentBoxData: any) {
  contentBoxData = contentBoxData;
  contentBoxData.sort((a: any, b: any) => a.position - b.position);
  return contentBoxData;
}
export function updateContentBox(contentBoxData: any, contentBox: any) {
  contentBox = '';
  if (contentBoxData.Data) {
    contentBox = contentBoxData;
  }
  return contentBox;
}
export function updateContentBoxHtmlDom(element: any, contentBoxData: any) {
  let b: any = '';
  if (contentBoxData) {
    let a: any = <HTMLElement>document.getElementById(element);
    a.innerHTML = contentBoxData;
    b = a.innerHTML;
  }
  return b;
}
