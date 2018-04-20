import styled from 'react-emotion'

export const FadeInContainer = styled('div') `
animation:fadeIn;
animation-duration: ${props => props.duration || '2s'};
animation-delay:${props => props.delay || '0s'};
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`

export const FadeOutContainer = styled('div') `
animation:fadeOut;
animation-duration: ${props => props.duration || '2s'};
animation-delay:${props => props.delay || '0s'};
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
`
export const SlideInLeftContainer = styled('div') `
animation:slideInLeft;
animation-duration: ${props => props.duration || '2s'};
animation-delay:${props => props.delay || '0s'};
@keyframes slideInLeft{
from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`

export const SlideInRightContainer = styled('div') `
animation:slideInRight;
animation-duration: ${props => props.duration || '2s'};
animation-delay:${props => props.delay || '0s'};
@keyframes slideInRight{
from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`
