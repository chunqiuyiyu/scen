module.exports = {
  PAD: ' ',
  EOL: '\n',
  getOptions: (options) => {
    const defaultOptions = {
      width: 0,
      height: 0,
      style: 'single',
      title: '',
      padding: '0',
      textAlign: 'left',
      titleAlign: 'left'
    }

    if (typeof options === 'undefined' || options === null) {
      return defaultOptions
    }

    if (typeof options !== 'object' || Array.isArray(options)) {
      throw new TypeError(`Invalid options: ${options}`)
    }

    const keys = Object.keys(options)
    keys.map(key => {
      if (Object.keys(defaultOptions).includes(key)) {
        defaultOptions[key] = options[key]
      }
    })

    if (typeof defaultOptions.width !== 'number') {
      throw new TypeError(`Invalid width: ${defaultOptions.width}`)
    }

    if (typeof defaultOptions.height !== 'number') {
      throw new TypeError(`Invalid height: ${defaultOptions.height}`)
    }

    return defaultOptions
  },

  parsePadding: (padding) => {
    const reg = /^[0-9]+.?[0-9]*$/
    if (typeof padding !== 'string' ||
        padding.split(' ').length > 4 ||
        !padding.split(' ').every(item => reg.test(item))
    ) {
      throw new TypeError(`Invalid padding: ${padding}`)
    }

    // paddingTop, paddingRight, paddingBottom, paddingLeft
    let pt, pr, pb, pl
    const paddingArr = padding.split(' ')
    paddingArr.forEach((item, i) => {
      paddingArr[i] = parseInt(item)
    })

    switch (paddingArr.length) {
      case 4:
        pt = paddingArr[0]
        pr = paddingArr[1]
        pb = paddingArr[2]
        pl = paddingArr[3]
        break

      case 3:
        pt = paddingArr[0]
        pr = pl = paddingArr[1]
        pb = paddingArr[2]
        break

      case 2:
        pt = pb = paddingArr[0]
        pr = pl = paddingArr[1]
        break

      case 1:
        pt = pr = pb = pl = paddingArr[0]
        break

      default:
        pt = pr = pb = pl = 0
        break
    }

    return { pt, pr, pb, pl }
  },

  centerText: (max, str, symbol) => {
    const offset = max - str.length
    const mid = (offset % 2 ? offset - 1 : offset) / 2
    const diff = offset % 2 ? 1 : 0

    return symbol.repeat(mid) + str + symbol.repeat(mid + diff)
  }
}
