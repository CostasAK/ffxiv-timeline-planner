function getJobs () {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jobs')
  var numberOfColumns = sheet.getLastColumn()
  return arrayToVector(
    sheet.getRange(2, 1, 1, numberOfColumns).getDisplayValues()
  )
}
