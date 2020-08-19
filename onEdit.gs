function onEdit (e) {
  var label = 'onEdit() time' // Labels the timing log entry.
  console.time(label)

  var sheet = SpreadsheetApp.getActiveSheet()
  console.info('Sheet name: ' + sheet.getName())

  if (
    sheet.getName() != 'Skills' &&
    sheet.getName() != 'Jobs' &&
    sheet.getName() != 'README'
  ) {
    setDataValidation(sheet)
  } else if (sheet.getName() == 'Jobs') {
    setJobSkills()
  } else if (sheet.getName() == 'Skills') {
    setJobSkills()
  }

  console.timeEnd(label)
}
