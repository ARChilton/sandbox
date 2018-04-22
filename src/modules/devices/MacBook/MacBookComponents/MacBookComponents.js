import styled from 'react-emotion'
import IPhoneX from '../../IPhoneX/IPhoneX'

export const laptopPhoneSwitchScreenWidth = 1300

export const PhoneForSmallScreens = styled(IPhoneX) `
@media(min-width: ${`${laptopPhoneSwitchScreenWidth}px`}){
  display:none;
}
`

export const MacBookContainer = styled('div') `
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const MacBookDevice = styled('div') `
  label: MacBook;
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  /* width: 960px; */
  width: calc(100% - 400px);
  max-width:960px;
  height: 600px;
  padding: 44px 44px 76px;
  margin: 0 80px;
  background: #bebebe;
  border-radius: 34px;

  :before{
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    position: absolute;
    content: '';
    display: block;
    top: 4px;
    left: 4px;
    border-radius: 30px;
    background: #1e1e1e;    
  }

  @media(max-width:${`${laptopPhoneSwitchScreenWidth - 1}px`}){
    display:none;
  }
`

export const MacBookTopBar = styled('div') `

  width: calc(100% + 2 * 70px); 
  height: 40px;
  position: absolute;
  content: '';
  display: block;
  top: 680px;
  left: -70px;
  border-bottom-left-radius: 90px 18px;
  border-bottom-right-radius: 90px 18px;
  background: #bebebe;
  -webkit-box-shadow: inset 0px -4px 13px 3px rgba(34, 34, 34, 0.6);
  box-shadow: inset 0px -4px 13px 3px rgba(34, 34, 34, 0.6);

  :before{
    width: 100%;
    height: 24px;
    content: '';
    display: block;
    top: 0;
    left: 0;
    background: #f0f0f0;
    border-bottom: 2px solid #aaa;
    border-radius: 5px;
    position: relative;
  }

  :after{
    width: 16%;
    height: 14px;
    content: '';
    display: block;
    top: 0;
    background: #ddd;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    border-radius: 0 0 20px 20px;
    -webkit-box-shadow: inset 0px -3px 10px #999;
    box-shadow: inset 0px -3px 10px #999;
  }
`

export const MacBookBottomBar = styled('div') `
  background: transparent;
  width: calc(100% + 2 * 70px);
  height: 26px;
  position: absolute;
  content: '';
  display: block;
  top: 680px;
  left: -70px;

  :before, :after{
    height: calc(100% - 2px);
    width: 80px;
    content: '';
    display: block;
    top: 0;
    position: absolute    
  }

  :before{
    left: 0;
    background: #f0f0f0;
    background: -webkit-gradient(linear, left top, right top, from(#747474), color-stop(5%, #c3c3c3), color-stop(14%, #ebebeb), color-stop(41%, #979797), color-stop(80%, #f0f0f0), color-stop(100%, #f0f0f0), to(#f0f0f0));
    background: linear-gradient(to right, #747474 0%, #c3c3c3 5%, #ebebeb 14%, #979797 41%, #f0f0f0 80%, #f0f0f0 100%, #f0f0f0 100%);    
  }

  :after{
    right: 0;
    background: #f0f0f0;
    background: -webkit-gradient(linear, left top, right top, from(#f0f0f0), color-stop(0%, #f0f0f0), color-stop(20%, #f0f0f0), color-stop(59%, #979797), color-stop(86%, #ebebeb), color-stop(95%, #c3c3c3), to(#747474));
    background: linear-gradient(to right, #f0f0f0 0%, #f0f0f0 0%, #f0f0f0 20%, #979797 59%, #ebebeb 86%, #c3c3c3 95%, #747474 100%);    
  }
`

export const MacBookCamera = styled('div') `
  background: #3c3d3d;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -5px;
  border-radius: 100%;
`

export const GeneralDeviceScreen = styled('div') `
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 3;
  background: white;
  overflow: hidden;
  display: block;
  border-radius: 1px;
  -webkit-box-shadow: 0 0 0 3px #111;
  box-shadow: 0 0 0 3px #111;
`
