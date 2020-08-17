function getSkills (jobIndex) {
  var maxSkills = SpreadsheetApp.getSheetByName('Jobs').getLastRow()

  var numberOfSkills = 0
  for (let i = 3; i <= getLastRow(); i++) {
    if (spreadsheet.getRange(i, jobIndex).isBlank()) {
      break
    }
    numberOfSkills++
  }

  var skills = SpreadsheetApp.getSheetByName('Jobs').getRange(
    3,
    jobIndex,
    numberOfSkills,
    1
  )
}
