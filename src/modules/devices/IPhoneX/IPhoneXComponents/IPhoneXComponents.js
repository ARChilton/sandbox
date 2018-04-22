import styled from 'react-emotion'
import SmallScreenIPhoneX from './SmallScreenIPhoneX/SmallScreenIPhoneX'

export const phoneSurrondToScreenOnlySwitch = 500

export const ScreenOnlyIPhoneX = styled(SmallScreenIPhoneX) `
width:100%;
min-width:276px;
height:100%;
@media(min-width:${`${phoneSurrondToScreenOnlySwitch}px`}){
  display: none;
}
`

export const IPhoneXDevice = styled('div') `
  label:IPhoneX;
  display: inline-block;
  position: relative;
  -webkit-box-sizing: content-box !important;
  box-sizing: content-box !important;
  width: 375px;
  max-width:375px;
  height: 812px;
  padding: 26px;
  /* background: #fdfdfd; */
  background: #5a5a5a;
  -webkit-box-shadow: inset 0 0 11px 0 black;
  box-shadow: inset 0 0 11px 0 black;
  border-radius: 66px;
  
  :before{
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    position: absolute;
    top: 5px;
    content: '';
    left: 5px;
    border-radius: 61px;
    background: black;
    z-index: 1
  }
`

export const IPhoneXDisplayNoneForSmallDevices = styled(IPhoneXDevice) `
@media(max-width:${`${phoneSurrondToScreenOnlySwitch - 1}px`}){
    display:none;
  }
`

export const IPhoneXThinDevice = styled(IPhoneXDevice) `
width:300px;
height:690px;
`

export const IPhoneXOverflow = styled('div') `
  label:IPhoneXOverflow;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 66px;
  overflow: hidden;
`

export const IPhoneXShadow = styled('div') `
  label:IPhoneXShadow;
  border-radius: 100%;
  width: 90px;
  height: 90px;
  position: absolute;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 60%);
`

export const IPhoneXShadowTopLeft = styled('div') `
label:ShadowTopLeft;
  top: -20px;
  left: -20px;
`

export const IPhoneXShadowTopRight = styled('div') `
label:ShadowTopRight;
  top: -20px;
  right: -20px;
`

export const IPhoneXShadowBottomLeft = styled('div') `
  label:ShadowBottomLeft;
  bottom: -20px;
  left: -20px;
`
export const IPhoneXShadowBottomRight = styled('div') `
  bottom: -20px;
  right: -20px;
`
export const IPhoneXInnerShadow = styled('div') `
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  top: 10px;
  overflow: hidden;
  left: 10px;
  border-radius: 56px;
  -webkit-box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.66);
  z-index: 1;

  :before{
    -webkit-box-shadow: inset 0 0 20px 0 #FFFFFF;
    box-shadow: inset 0 0 20px 0 #FFFFFF;
    width: 100%;
    height: 116%;
    position: absolute;
    top: -8%;
    content: '';
    left: 0;
    border-radius: 200px / 112px;
    z-index: 2;
  }
`

export const IPhoneXScreen = styled('div') `
  label: IPhoneXScreen;
  width: 100%;
  position: relative;
  height: 100%;
  min-height:640px;
  z-index: 3;
  border-radius: 40px;
  background: white;
  overflow: hidden;
  display: block;  
  -webkit-box-shadow: 0 0 0 3px #111;
  box-shadow: 0 0 0 3px #111;  
  -webkit-box-shadow: none;
  box-shadow: none;
`

export const IPhoneXBottomBar = styled('div') `
  display: block;
  width: 100%;
  position: absolute;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  left: 0;
  bottom: 80px;
`

export const IPhoneXTopBar = styled('div') `
  display: block;
  width: 100%;
  position: absolute;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  left: 0;
  top: 80px;
`
export const IPhoneXVolumeButton = styled('div') `
  width: 3px;
  background: #b5b5b5;
  position: absolute;
  left: -3px;
  top: 116px;
  height: 32px;

  :before,:after{
  width: 3px;
  background: #b5b5b5;
  position: absolute;
  }

  :before{
    height: 62px;
    top: 62px;
    content: '';
    left: 0;   
  }

  :after{
    height: 62px;
    top: 140px;
    content: '';
    left: 0; 
  }
`

export const IPhoneXSleepButton = styled('div') `
  height: 96px;
  top: 200px;
  right: -3px;
  width: 3px;
  background: #b5b5b5;
  position: absolute;
`

export const IPhoneXCamera = styled('div') `
  width: 6px;
  height: 6px;
  top: 9px;
  border-radius: 100%;
  position: absolute;
  left: 75%;
  background: #0d4d71;
`

export const IPhoneXSpeaker = styled('div') `
  height: 6px;
  width: 60px;
  left: 50%;
  position: absolute;
  top: 9px;
  margin-left: -30px;
  background: #171818;
  border-radius: 6px;
`
export const IPhoneXNotch = styled('div') `
  position: absolute;
  width: 210px;
  height: 30px;
  top: 26px;
  left: 108px;
  z-index: 4;
  background: black;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  :before,:after{
    content: '';
    height: 8px;
    position: absolute;
    top: 0;
    width: 8px 
  }

  :before{
    background: radial-gradient(circle at bottom right, transparent 0, transparent 70%, black 70%, black 100%);
    right: -8px    
  }

  :after{
    background: radial-gradient(circle at bottom left, transparent 0, transparent 70%, black 70%, black 100%);
    left: -8px 
  }
`
