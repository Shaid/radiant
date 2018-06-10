const ENGINE_TICK_INTERVAL = 1000

let timer: any

class MainLoop {
  tick() { // eslint-disable-line
    console.log('tick')
  }

  start() {
    timer = setInterval(this.tick, ENGINE_TICK_INTERVAL)
  }

  stop() { // eslint-disable-line
    clearInterval(timer)
  }
}

export default MainLoop
