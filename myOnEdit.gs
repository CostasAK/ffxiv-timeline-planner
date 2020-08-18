function myOnEdit () {
  var label = 'onEdit() time' // Labels the timing log entry.
  console.time(label)

  var sheet = SpreadsheetApp.getActiveSheet()
  console.info('Sheet name: ' + sheet.getName())

  setDataValidation(sheet)

  console.timeEnd(label)
}
