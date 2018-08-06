import React from 'react'
import {styled} from 'fusion-plugin-styletron-react'
import {assetUrl} from 'fusion-core'

const Panel = styled('div', {background: 'silver'})

export default (
  <Panel>
    <img src={assetUrl('./my-image.jpeg')} />
  </Panel>
)
