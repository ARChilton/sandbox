import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css, cx } from 'react-emotion'
import { H2, P } from '../../../components/Text/Text'
import ColoredDiv from '../../../components/ColoredDiv/ColoredDiv'
import Hr, { HrBottomOnly, HrNoLineOneWayOnly } from '../../../components/Hr/Hr'
import BackgroundImg from './BackgroundImg/BackgroundImg'
import { getDesignImagesArrayState, getDesignImagePreviewState } from '../../../redux/reducers'
import MacBook from '../../../modules/devices/MacBook/MacBook'
import Iframe from '../../../components/IFrame/Iframe'


const FlexContainer = styled('div') `
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
width:100%;
@media(max-width:992px){
  flex-direction:column;
}
`
const imgStyling = css`
width:100%;
`

const imageColumn = css`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const SmallImgContainer = styled('div') `
border:solid 2px ${props => props.theme.color.primary};
height:150px;
padding:4px;
margin-right:-1px;
:hover{
  border-width:4px;
  
}
`

const imageSelectionRow = css`
width:100%;
cursor: pointer;
`

const H20emMarginTop = styled(H2) `
margin-top:0em;
`

const ColouredBoxes = styled(ColoredDiv) `
padding: 30px 34px;
text-align: justify;
background-color: ${props => props.theme.color.primary};
color: #fff;
`

const smallScreenHide = css`
@media(max-width:992px){
  display:none;
}
`

const smallScreenShow = css`
@media(min-width:992px){
  display: none;
}
`


const RestOfSite = ({ designImages, designImagePreview }) => (
  <div>
    <HrBottomOnly className="col-xs-12" />
    <FlexContainer className="row" id="designSection">
      <div className={cx('col-sm-4', 'col-xs-12', imageColumn)} style={{ height: '90vh' }}>
        <BackgroundImg src={designImages[designImagePreview]} className="col-xs-12" />
        {/* <StarMindDemoMockupImg className={imgStyling} /> */}
        <div className={imageSelectionRow}>
          <SmallImgContainer className="col-xs-4">
            <BackgroundImg src={designImages[0]} designImages={designImages} id={0} className={imgStyling} />
          </SmallImgContainer>
          <SmallImgContainer className="col-xs-4">
            <BackgroundImg src={designImages[1]} designImages={designImages} id={1} className={imgStyling} />
          </SmallImgContainer>
          <SmallImgContainer className="col-xs-4">
            <BackgroundImg src={designImages[2]} designImages={designImages} id={2} className={imgStyling} />
          </SmallImgContainer>
        </div>

      </div>
      <div className="col-md-6 col-xs-12">
        <ColouredBoxes>
          <H20emMarginTop style={{ fontFamily: 'Kalam', fontWeight: 'bold' }}>Design</H20emMarginTop>
          <P>No matter how skilled the developer drawing a web page is faster than building it.</P>
          <P>Being agile and iterative in design during the early stages of a project helps get both the customer and developer understanding each other. To enable me in this task I use a wireframing tool.</P>
          <P>This allows me to create wireframes like the ones <span className={smallScreenHide}>to the left</span><span className={smallScreenShow}>above</span>. They have a deliberatly hand-drawn style because their purpose is not to be an exact representation but a generalisation for greater understanding.</P>
          <P>I first began using Balsamiq as a rapid prototyping tool in a previous role as a Product Owner. This aided me in communicating and testing designs and became a tool I used everyday.</P>
          <P>If you work with me we would collaboratively design your site and I would create interactive wireframes as my first deliverable to enable you to get a better feel for the flow of the site. This would be an iterative process.</P>
        </ColouredBoxes>
      </div>
    </FlexContainer>
    <div className="col-xs-12">
      <Hr />
    </div>
    <FlexContainer className="row" id="createSection">
      <div className="col-md-6 col-xs-12">
        <ColouredBoxes>
          <H20emMarginTop>Create</H20emMarginTop>
          <P>While I {"don't"} have decades of front end web development I do have experience in the latest technologies, most of which have only exisited in the last 3 - 4 years, so there are very few individuals with more than a year or two of experience.</P>
          <P>My favoured website building technology is to use the React framework, this was created and maintained by Facebook. The benefits of using this technology is that the whole website is built from reusable building blocks and while it looks and acts like any other website it is in fact a single page enabling lightning fast page transfers.</P>
          <P>This {"isn't"} the only technology I am familiar with, I have also created websites in a more traditional sense or using Wordpress.</P>
          <P>This demonstration is a React website.</P>
        </ColouredBoxes>
      </div>
    </FlexContainer>
    <div className="col-xs-12">
      <Hr />
    </div>
    <FlexContainer className="row" id="releaseSection">
      <div className="col-md-6 col-xs-12">
        <ColouredBoxes>
          <H20emMarginTop>Release</H20emMarginTop>
          <P>Having been a Product Owner in the past, I know how to break down and manage software development cycles.</P>
          <P>Being an enrolled in the AGILE methodology I believe in full transparency of progress and I like to release incremental changes to give value to my customers as soon as I have created it.</P>
          <P>In the case of Starmind, if I were to update your website I would look to update page by page and by alike components, such as the navigation bar as to maintain consistency across the website.</P>
        </ColouredBoxes>
      </div>
    </FlexContainer>
    <div className="col-xs-12">
      <Hr />
    </div>
    <FlexContainer className="row" id="seoSection">
      <div className="col-md-6 col-xs-12">
        <ColouredBoxes>
          <H20emMarginTop>SEO</H20emMarginTop>
          <P>Having been a Product Owner in the past, I know how to break down and manage software development cycles.</P>
          <P>Being an enrolled in the AGILE methodology I believe in full transparency of progress and I like to release incremental changes to give value to my customers as soon as I have created it.</P>
          <P>In the case of Starmind, if I were to update your website I would look to update page by page and by alike components, such as the navigation bar as to maintain consistency across the website.</P>
        </ColouredBoxes>
      </div>
    </FlexContainer>
    <div className="col-xs-12">
      <Hr />
    </div>
    <FlexContainer className="row" id="portfolioSection">
      <div className="col-xs-6">
        {/* <ColouredBoxes>
          <H20emMarginTop>Portfolio</H20emMarginTop>
        </ColouredBoxes> */}
        <MacBook><Iframe src="https://checkpointlive.com" /></MacBook>

      </div>
    </FlexContainer>
    <div className="col-xs-12">
      <HrNoLineOneWayOnly />
    </div>
  </div>
)

RestOfSite.propTypes = {
  designImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  designImagePreview: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  designImages: getDesignImagesArrayState(state),
  designImagePreview: getDesignImagePreviewState(state),
})

export default connect(mapStateToProps)(RestOfSite)
