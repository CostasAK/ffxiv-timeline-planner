function getSkills (jobIndex) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jobs')
  var maxSkills = sheet.getLastRow()

  var numberOfSkills = 0
  for (let i = 3; i <= maxSkills; i++) {
    if (sheet.getRange(i, jobIndex).isBlank()) {
      break
    }
    numberOfSkills++
  }

  var skills = sheet.getRange(3, jobIndex, numberOfSkills, 1)
}
