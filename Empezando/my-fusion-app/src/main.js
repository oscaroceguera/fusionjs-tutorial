// @flow
import App from 'fusion-react'
import Router from 'fusion-plugin-react-router'
import Styletron from 'fusion-plugin-styletron-react'

import root from './components/root'

export default () => {
  const app = new App(root)
  app.register(Styletron)
  // app.register(Router)
  return app
}
