function timestampToSeconds (timestamp) {
  const pattern = /(?<minutes>\d{2}):(?<seconds>\d{2}).(?<tenths>\d)/
  const match = pattern.exec(timestamp)
  return (
    60 * parseInt(match.groups.minutes, 10) +
    parseInt(match.groups.seconds, 10) +
    parseInt(match.groups.tenths, 10) / 10.0
  )
}
