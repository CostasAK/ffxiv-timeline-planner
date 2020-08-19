function setSkillColors (sheet) {
  const currentRow = sheet.getActiveCell().getRow()
  const currentColumn = sheet.getActiveCell().getColumn()
  console.info('Active cell: ' + currentRow + ', ' + currentColumn)

  const job = sheet.getRange(2, currentColumn).getDisplayValue()
  const jobs = getJobs()

  if (currentRow > 1 && jobs.indexOf(job) >= 0) {
    const rgbMitigation = getRgb(SpreadsheetApp.ThemeColorType.ACCENT1).map(
      x => 255 - Math.ceil((255 - x) / 2)
    )
    const rgbHealing = getRgb(SpreadsheetApp.ThemeColorType.ACCENT4).map(
      x => 255 - Math.ceil((255 - x) / 2)
    )
    const rgbBuff = getRgb(SpreadsheetApp.ThemeColorType.ACCENT2).map(
      x => 255 - Math.ceil((255 - x) / 2)
    )
    console.info(
      'Theme colors: Mitigation ' +
        getHex(rgbMitigation) +
        ', Healing ' +
        getHex(rgbHealing) +
        ', Buff ' +
        getHex(rgbBuff)
    )
    const jobSkills = []

    const lastRow = sheet.getLastRow()
    const timestamps = sheet
      .getRange(3, 1, lastRow)
      .getDisplayValues()
      .map(timestampToSeconds)
    const playerSkills = sheet
      .getRange(3, currentColumn, lastRow)
      .getDisplayValues()
    const numberOfTimestamps = timestamps.length
    sheet.getRange(3, currentColumn, lastRow).setBackground('white')

    var types = []
    var colors = []
    for (let i = 0; i < numberOfTimestamps; i++) {
      if (types.length <= i) types.push([])
      if (colors.length <= i) colors.push([])
    }
  }
}
