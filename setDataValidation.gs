function setDataValidation (sheet) {
  var numberOfColumns = sheet.getLastColumn()
  console.info('numberOfColumns: ' + numberOfColumns)
  var jobs = getJobs()
  console.info('jobs: ' + jobs)
  if (numberOfColumns) {
    var searchRow = arrayToVector(
      sheet.getRange(2, 1, 1, numberOfColumns).getDisplayValues()
    )
    console.info('searchRow: ' + searchRow)
  }

  for (let i = 1; i <= numberOfColumns; i++) {
    var job = searchRow[i - 1]
    console.info('job: ' + job)
    var jobIndex = jobs.indexOf(job) + 1
    console.info('jobIndex: ' + jobIndex)
    var range = sheet.getRange(3, i, sheet.getMaxRows())
    range.clearDataValidations()
    if (jobIndex) {
      var jobSkills = getSkills(jobIndex)
      console.info('jobSkills: ' + jobSkills.getDisplayValues())
      if (jobSkills) {
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
