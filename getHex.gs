function getHex (rgb) {
  var hex = '#'
  for (let i = 0; i < rgb.length; i++) {
    let h = rgb[i].toString(16)
    hex += h.length == 1 ? '0' + h : h
  }
  return hex
}
