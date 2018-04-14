import React from 'react'
import { ConnectedRouter } from 'react-router-redux'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Provider from '../../stories/Provider'
import '../../css/bootstrap.min.css'
import { history } from '../../index'

import NavBar from './NavBar'

storiesOf('Modules/NavBar', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('desktop', withInfo('NavBar for at desktop size')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px',
    }}
    >
      <ConnectedRouter history={history}>
        <NavBar />
      </ConnectedRouter>
    </div>)))

