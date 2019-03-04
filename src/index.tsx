import { configure as mobxConfigure } from 'mobx'
// import { addMiddleware } from 'mobx-state-tree'
// import { simpleActionLogger as logger, asReduxStore, connectReduxDevtools } from 'mst-middlewares'
import React from 'react'
import ReactDOM from 'react-dom'
// import remotedev from 'remotedev'

import App from 'components/App'
// import config from 'config'
import registerServiceWorker from 'registerServiceWorker'
import { initialiseAppStore } from 'stores/AppStore'

require('intersection-observer')

// MobX 4+ 'useStrict'
mobxConfigure({ enforceActions: true })

// Create app store
const store = initialiseAppStore()

const MobXDevTools = React.Fragment
/*
// Dev-env-only things go here
if (config.ENV === 'development') {
  // Dynamically load MobX dev tools
  MobXDevTools = require('mobx-react-devtools').default // eslint-disable-line global-require

  // Enable MST logging but ony in DEV mode
  addMiddleware(store, logger)

  // Make MST usable with Redux Dev Tools
  asReduxStore(store)
  connectReduxDevtools(remotedev, store)
}
*/

export default ReactDOM.render(
  <App store={store}>
    <React.StrictMode>
      <div id="devtools" aria-hidden>
        <MobXDevTools />
      </div>
    </React.StrictMode>
  </App>,
  document.getElementById('root') || document.createElement('div')
)

registerServiceWorker()
