
var sheetURL = "https://docs.google.com/spreadsheets/d/166XRIwP22F6qeQBo_DFtnU-TEF2zORGMjaiqhzOJbc4/edit#gid=0";


function doGet(e) {

  var ss = SpreadsheetApp.openByUrl(sheetURL);
  var ws = ss.getSheetByName("data");

  var tmp = HtmlService.createTemplateFromFile("page");
  return tmp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
   
}


function userClicked(userInfo) {
  console.log(userInfo)
  
  var ss = SpreadsheetApp.openByUrl(sheetURL);
  var ws = ss.getSheetByName("data");

  ws.appendRow([userInfo.state,userInfo.district,userInfo.project,userInfo.period,userInfo.col_00,userInfo.col_01,userInfo.col_02,userInfo.col_03,userInfo.col_04, userInfo.col_05,userInfo.col_06,userInfo.col_07,userInfo.col_08,userInfo.col_09,
  userInfo.col_10,	userInfo.col_11,	userInfo.col_12,	userInfo.col_13,	userInfo.col_14,	userInfo.col_15,	userInfo.col_16,	userInfo.col_17,	userInfo.col_18,	userInfo.col_19,	userInfo.col_30,	userInfo.col_31,	userInfo.col_32,	userInfo.col_33,	userInfo.col_34,	userInfo.col_35,	userInfo.col_36,	userInfo.col_37,	userInfo.col_38,	userInfo.col_39,	userInfo.col_40,	userInfo.col_41,	userInfo.col_42,	userInfo.col_43,	userInfo.col_44,	userInfo.col_45,	userInfo.col_46,	userInfo.col_47,	userInfo.col_48,	userInfo.col_49,	userInfo.col_50,	userInfo.col_51,	userInfo.col_52,	userInfo.col_53,	userInfo.col_54,	userInfo.col_55,	userInfo.col_56,	userInfo.col_57,	userInfo.col_58,	userInfo.col_59,	userInfo.col_60,	userInfo.col_61,	userInfo.col_62,	userInfo.col_63,	userInfo.col_64,	userInfo.col_65,	userInfo.col_66,	userInfo.col_67,	userInfo.col_68,	userInfo.col_69,	userInfo.col_70,	userInfo.col_71,	userInfo.col_72,	userInfo.col_73,	userInfo.col_74,	userInfo.col_75,	userInfo.col_76,	userInfo.col_77,	userInfo.col_78,	userInfo.col_79,	userInfo.col_80,	userInfo.col_81,	userInfo.col_82,	userInfo.col_83,	userInfo.col_84,	userInfo.col_85,	userInfo.col_86,	userInfo.col_87,	userInfo.col_88,	userInfo.col_89,	userInfo.col_90,	userInfo.col_91,	userInfo.col_92,	userInfo.col_93,	userInfo.col_94,	userInfo.col_95,	userInfo.col_96,	userInfo.col_97,	userInfo.col_98,	userInfo.col_99,	userInfo.col_100,	userInfo.col_101,	userInfo.col_102,	userInfo.col_103,	userInfo.col_104,	userInfo.col_105,	userInfo.col_106,	userInfo.col_107,	userInfo.col_108,	userInfo.col_109,new Date()])
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
