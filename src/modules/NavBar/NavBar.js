import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import NavBarOption from './NavBarOption/NavBarOption'


const NavBar = ({ className }) => (
  <div className={className}>
    <div className="row">
      <div>
        <div className="col-sm-1">
          {/* <img src="https://checkpointlive.com/largeLogo.png" alt="Checkpoint Live small logo" /> */}
        </div>
        <NavBarOption to="/" label="Home" />
        <NavBarOption to="/projects" label="Projects" />
      </div>
    </div>
  </div>
)

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
}


const DefaultNavBar = styled(NavBar)`
@media(min-width:768px){
  top:0px;
  position:sticky;
  background-color:#fff;   
  z-index: 5;    
  vertical-align: middle;
  border-bottom: 1px solid #efefef;
  text-align: center;
}
@media(max-width:768px){
  display: none;
}
`


export default DefaultNavBar
