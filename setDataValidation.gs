function setJobSkillValidation (sheet) {
  var numberOfColumns = sheet.getLastColumn()
  var jobs = getJobs()
  var searchRow = sheet.getRange(2, 1, 1, numberOfColumns).getDisplayValues()

  for (const job of searchRow) {
    if (jobs.indexOf(job)) {
      let jobSkills = getSkills(job)
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
