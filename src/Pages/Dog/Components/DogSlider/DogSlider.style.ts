import { styled } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

const StyledSwiperSlide = styled(SwiperSlide)`
  max-width: 88px;
  max-height: 88px;
`

const StyledImg = styled.img`
  border-radius: 3px;
  min-width: 200px;
  width: 100%;
  max-height: 455px;
  height: 100%;
`

const StyledThumbWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 100%;
  margin-top: 18px;
`

const StyledSwiper = styled(Swiper)`
  background-color: rgb(181, 194, 104, 50%);
  padding: 0 46px;
  justify-content: center;
`

const StyledThumbImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 88px;
  max-height: 88px;
  border-radius: 4px;
`

export { StyledSwiperSlide, StyledImg, StyledThumbWrapper, StyledThumbImg, StyledSwiper }
