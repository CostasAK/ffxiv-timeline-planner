function setDataValidation (sheet) {
  var numberOfColumns = sheet.getLastColumn()
  var jobs = getJobs()
  var searchRow = arrayToVector(
    sheet.getRange(2, 1, 1, numberOfColumns).getDisplayValues()
  )

  for (const job of searchRow) {
    let jobIndex = jobs.indexOf(job) + 1
    if (jobIndex) {
      let jobSkills = getSkills(jobIndex)
      if (jobSkills) {
        let range = sheet.getRange(3, jobIndex, sheet.getMaxRows())
        let rule = SpreadsheetApp.newDataValidation()
          .requireValueInRange(jobSkills, true)
          .setAllowInvalid(true)
          .setHelpText(
            'Choose a skill from the dropdown menu, or specify a comma separated list of skills.'
          )
          .build()
        range.setDataValidation(rule)
      }
    }
  }
}
