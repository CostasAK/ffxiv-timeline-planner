function setSkillColors (sheet) {
  var currentRow = sheet.getActiveCell().getRow()
  var currentColumn = sheet.getActiveCell().getColumn()
  console.info('Active cell: ' + currentRow + ', ' + currentColumn)

  if (currentRow > 1) {
    const rgbMitigation = getRgb(SpreadsheetApp.ThemeColorType.ACCENT1)
    const rgbHealing = getRgb(SpreadsheetApp.ThemeColorType.ACCENT4)
    const rgbBuff = getRgb(SpreadsheetApp.ThemeColorType.ACCENT2)
    console.info(
      'Theme colors: Mitigation ' +
        getHex(rgbMitigation) +
        ', Healing ' +
        getHex(rgbHealing) +
        ', Buff ' +
        getHex(rgbBuff)
    )
  }
}
