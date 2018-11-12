const border = require('./lib/border')
const {
  EOL,
  PAD,
  parsePadding,
  getOptions,
  centerText
} = require('./lib/utils')

module.exports = (text, options) => {
  let result = ''
  const strArr = text.split(EOL)
  const arr = strArr.map(item => item.length)
  const myOptions = getOptions(options)

  const {
    height,
    width,
    style,
    title,
    padding,
    textAlign,
    titleAlign,
    marginLeft,
    marginTop,
    marginBottom
  } = myOptions

  let max = Math.max.apply(null, [title.length, width, Math.max.apply(null, arr)])
  const boxHeight = Math.max.apply(null, [strArr.length, height])

  const { tl, tr, bl, br, v, h } = border[style]
  const { pt, pr, pl, pb } = parsePadding(padding)

  result += tl
  if (title) {
    max += 2
  }

  const header = h.repeat(max - title.length + pl + pr - 2)
  const padTR = tr + EOL
  switch (titleAlign) {
    case 'center':
      result += h + centerText(max, title, h) + h + padTR
      break

    case 'right':
      result += header + h
      result += title + h + padTR
      break

    case 'left':
    default:
      result += h + title
      result += header + h + padTR
  }

  const total = max + pl + pr
  const hr = v + PAD.repeat(total) + v + EOL

  result += hr.repeat(pt)

  strArr.map(str => {
    const padLeft = v + PAD.repeat(pl)
    const padRight = PAD.repeat(pr) + v + EOL

    if (str) {
      result += padLeft
      result += textAlign === 'center' ? centerText(max, str, PAD)
        : textAlign === 'right' ? str.padStart(max)
          : str.padEnd(max)
      result += padRight
    }
  })

  result += hr.repeat(boxHeight - strArr.length)
  result += hr.repeat(pb)

  result += bl + h.repeat(total) + br

  // Add left margin
  let resultLeftMargin = ''
  result.split(EOL).forEach(line => {
    let tempLine = ''
    for (let i = 0; i < marginLeft; i++) tempLine += ' '
    resultLeftMargin += tempLine + line + EOL
  })

  // Add top margin
  let resultTopMargin = ''
  for (let i = 0; i < marginTop; i++) resultTopMargin += EOL

  // Add bottom margin
  let resultBottomMargin = ''
  for (let i = 0; i < marginBottom; i++) resultBottomMargin += EOL

  let realResult = resultTopMargin + resultLeftMargin
  realResult = realResult.substr(0, realResult.length - 1)
  realResult += resultBottomMargin

  return realResult
}
