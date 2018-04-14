import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import HomePage from './HomePage'
import Provider from '../../stories/Provider'

storiesOf('Home Page', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('desktop', withInfo('Home page of the app')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px',
    }}
    >
      <HomePage />
    </div>)))

  .add('tablet', withInfo('Home page of the app')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '768px', border: '1px solid #000',
    }}
    >
      <HomePage />
    </div>)))
  .add('mobile', withInfo('Home page of the app')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '360px', border: '1px solid #000',
    }}
    >
      <HomePage />
    </div>)))
