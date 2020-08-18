function setJobSkills () {
  var jobSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jobs')
  var numberOfJobs = jobSheet.getLastColumn()
  var jobs = arrayToVector(
    jobSheet.getRange(2, 1, 1, numberOfJobs).getDisplayValues()
  )
  console.info('jobs: ' + jobs)

  var skillSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    'Skills'
  )
  var numberOfSkills = skillSheet.getLastRow() - 1
  var skills = skillSheet.getRange(2, 1, numberOfSkills, 6).getDisplayValues()
  console.info('skills: ' + skills)

  var skillNumber
  for (let i = 0; i < numberOfJobs; i++) {
    skillNumber = 3
    console.info('job: ' + jobs[i])
    for (let j = 0; j < numberOfSkills; j++) {
      console.info('jobskill: ' + skills[j][0] + '. skill: ' + skills[j][2])
      if (jobs[i] == skills[j][0]) {
        jobSheet.getRange(skillNumber, i + 1).setValue(skills[j][2])
        skillNumber++
      }
    }
  }
}
