function myOnEdit () {
  var label = 'onEdit() time' // Labels the timing log entry.
  console.time(label)

  var sheet = SpreadsheetApp.getActiveSheet()
  console.info('Sheet name: ' + sheet.getName())

  if (
    sheet.getName() != 'Skills' &&
    sheet.getName() != 'Jobs' &&
    sheet.getName() != 'README'
  )
    setDataValidation(sheet)

  console.timeEnd(label)
}
