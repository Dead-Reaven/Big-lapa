import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../Components/UI/Global.styles'
import Footer from '../Components/Footer/Footer'
import Cookies from '../Components/Cookies/Cookies'
import MainSlider from '../Components/MainSlider/MainSlider'
import { useEffect, useState } from 'react'

function MainLayout() {
  const { pathname } = useLocation()
  const [initialSliderNumber, setInitialSliderNumber] = useState<number>(0)

  useEffect(() => {
    console.log('useEffect')
    const pathNumbers = ['/', '/about', '/dogs', '/contacts']
    const res = pathNumbers.findIndex((pathNumber) => pathname === pathNumber)
    setInitialSliderNumber(res)
  }, [pathname])

  return (
    <>
      <ResetStyles />
      <Header />
      <MainSlider
        initialSliderNumber={initialSliderNumber}
        setInitialSliderNumber={setInitialSliderNumber}
      />
      <Outlet />
      <Cookies />
      <Footer />
    </>
  )
}

export default MainLayout
