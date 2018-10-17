// tl: topLeft, tr: topRight, br: bottomRight
// bl: bottomLeft, v: vertical, h: horizonta
module.exports = {
  'single': {
    'tl': '┌', 'tr': '┐', 'br': '┘', 'bl': '└', 'v': '│', 'h': '─'
  },
  'double': {
    'tl': '╔', 'tr': '╗', 'br': '╝', 'bl': '╚', 'v': '║', 'h': '═'
  },
  'round': {
    'tl': '╭', 'tr': '╮', 'br': '╯', 'bl': '╰', 'v': '│', 'h': '─'
  },
  'single-double': {
    'tl': '╓', 'tr': '╖', 'br': '╜', 'bl': '╙', 'v': '║', 'h': '─'
  },
  'double-single': {
    'tl': '╒', 'tr': '╕', 'br': '╛', 'bl': '╘', 'v': '│', 'h': '═'
  },
  'classic': {
    'tl': '+', 'tr': '+', 'br': '+', 'bl': '+', 'v': '|', 'h': '-'
  },
  'stars': {
    'tl': '*', 'tr': '*', 'br': '*', 'bl': '*', 'v': '*', 'h': '*'
  },
  'fenced': {
    'tl': '#', 'tr': '#', 'br': '#', 'bl': '#', 'v': '#', 'h': '#'
  }
}
