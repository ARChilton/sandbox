import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import PhoneDisplay from './PhoneDisplay'

storiesOf('Modules/PhoneDisplay', module)
  .add('android', withInfo('Android frame for an iframe')(() => (
    <PhoneDisplay src="https://checkpointlive.com" iFrameTitle="Test iframe" />
  )))
