import images from '../../../components/Images/Images'

export const CHANGE_DESIGN_IMAGE = 'CHANGE_DESIGN_IMAGE'

export const changeDesignImage = designImagePreview => ({
  type: CHANGE_DESIGN_IMAGE,
  payload: { designImagePreview },
})

const initialState = {
  designImages: [images.starMindDemoMockup, images.exportLayerList, images.websiteDesign, 'https://checkpointlive.com/largeLogo.png'],
  designImagePreview: 0,
}

const restOfSiteReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_DESIGN_IMAGE: {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}

export default restOfSiteReducer

export const getDesignImageArray = state => (state.designImages)

export const getDesignImagePreview = state => (state.designImagePreview)

