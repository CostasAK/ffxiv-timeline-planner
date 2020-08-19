function getRgb (themeColorType) {
  const theme = SpreadsheetApp.getActive().getSpreadsheetTheme()
  const rgb = theme.getConcreteColor(themeColorType).asRgbColor()
  return [rgb.getRed(), rgb.getGreen(), rgb.getBlue()]
}
