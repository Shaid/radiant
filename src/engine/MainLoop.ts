const ENGINE_TICK_INTERVAL = 1000

let timer: any

class MainLoop {
  tick() {
    console.log('tick')
  }

  start() {
    timer = setInterval(this.tick, ENGINE_TICK_INTERVAL)
  }

  stop() {
    clearInterval(timer)
  }
}

export default MainLoop
