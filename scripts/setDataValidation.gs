function setDataValidation (sheet) {
  var currentRow = sheet.getActiveCell().getRow()
  var currentColumn = sheet.getActiveCell().getColumn()
  console.info('Active cell: ' + currentRow + ', ' + currentColumn)

  if (currentRow == 2) {
    var jobs = getJobs()
    console.info('jobs: ' + jobs)

    var job = sheet.getActiveCell().getDisplayValue()
    console.info('job: ' + job)

    var jobIndex = jobs.indexOf(job) + 1
    console.info('jobIndex: ' + jobIndex)

    var range = sheet.getRange(3, currentColumn, sheet.getMaxRows())
    range.clearDataValidations()

    if (jobIndex > 0) {
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
