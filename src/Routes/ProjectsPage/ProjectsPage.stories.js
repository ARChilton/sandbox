import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ProjectsPage from './ProjectsPage'
import Provider from '../../stories/Provider'

storiesOf('Projects Page', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('desktop', withInfo('Projects page of the app')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px',
    }}
    >
      <ProjectsPage />
    </div>)))

  .add('tablet', withInfo('Home page of the app')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '768px', border: '1px solid #000',
    }}
    >
      <ProjectsPage />
    </div>)))
  .add('mobile', withInfo('Home page of the app')(() => (
    <div style={{
      position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '360px', border: '1px solid #000',
    }}
    >
      <ProjectsPage />
    </div>)))
