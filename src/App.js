import React from 'react'
// import Logo from './components/Logo/Logo'
import Helmet from 'react-helmet'
import Routes from './Routes/Routes'

const App = () => (
  <div>
    <Helmet
      defaultTitle="Adam Chilton"
      titleTemplate="%s | Adam Chilton"
    />

    {/* <ScrollToTop> */}
    {/* <Header /> */}
    <Routes />
    {/* <Footer /> */}
    {/* </ScrollToTop> */}

  </div>
)


export default App
