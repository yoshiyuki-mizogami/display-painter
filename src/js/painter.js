const DrawingBoard = require('DrawingBoard')
class Painter{
  constructor(id, opt){
    this.enabled = false
    this.board = new DrawingBoard.Board(id, {
      webStorage:false,
      background:false,
      ...opt
    })
  }
  undo(){
    this.board.goBackInHistory()
  }
  setColor(color){
    this.board.setColor(color)
  }
  setWidth(n){
    this.board.ctx.lineWidth = n
  }
  clear(){
    this.board.resetBackground()
  }
}
module.exports = Painter