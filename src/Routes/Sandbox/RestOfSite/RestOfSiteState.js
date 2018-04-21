import images from '../../../components/Images/Images'

export const CHANGE_DESIGN_IMAGE = 'CHANGE_DESIGN_IMAGE'
export const CHANGE_PORTFOLIO_IMAGE = 'CHANGE_PORTFOLIO_IMAGE'

export const changeDesignImage = designImagePreview => ({
  type: CHANGE_DESIGN_IMAGE,
  payload: { designImagePreview },
})
export const changePortfolioImage = portfolioPreview => ({
  type: CHANGE_DESIGN_IMAGE,
  payload: { portfolioPreview },
})

const initialState = {
  designImages: [images.starMindDemoMockup, images.websiteDesign, images.websiteDesign2],
  designImagePreview: 0,
  portfolio: [
    {
      src: 'https://checkpointlive.com', iframe: true, caption: 'A software as a service website for events.', imgSrc: 'https://checkpointlive.com/largeLogo.png', imgBackgroundColor: '#fff',
    },
    {
      src: 'https://tonbridge-scouts.org.uk', iframe: true, caption: 'I manage the Tonbridge District Scouts website, a low budget website built in wordpress for easier blog posting.', imgSrc: 'https://tonbridge-scouts.org.uk/wp-content/uploads/2017/04/tonbridge-starts-transparent-large.png', imgBackgroundColor: '#fff',
    },
    {
      src: 'https://flixpremiere.com', iframe: false, caption: 'I helped build some of the flixpremiere website.', imgSrc: images.flix, imgBackgroundColor: '#000',
    },
  ],
  portfolioPreview: 0,
}

const restOfSiteReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_DESIGN_IMAGE:
    case CHANGE_PORTFOLIO_IMAGE:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default restOfSiteReducer

export const getDesignImageArray = state => (state.designImages)

export const getDesignImagePreview = state => (state.designImagePreview)

export const getPortfolioArray = state => state.portfolio

export const getPortfolioPreview = state => state.portfolioPreview

