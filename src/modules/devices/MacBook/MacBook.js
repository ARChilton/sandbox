import React from 'react'
import PropTypes from 'prop-types'
import { MacBookDevice, MacBookTopBar, MacBookBottomBar, MacBookCamera, GeneralDeviceScreen, MacBookContainer, PhoneForSmallScreens } from './MacBookComponents/MacBookComponents'


const MacBook = ({ children }) => (
  <MacBookContainer>
    <MacBookDevice>
      <MacBookTopBar />
      <MacBookCamera />
      <GeneralDeviceScreen>
        {children}
      </GeneralDeviceScreen>
      <MacBookBottomBar />
    </MacBookDevice>
    <PhoneForSmallScreens>
      {children}
    </PhoneForSmallScreens>
  </MacBookContainer>
)


MacBook.propTypes = {
  children: PropTypes.node,
}

MacBook.defaultProps = {
  children: null,
}

export default MacBook
