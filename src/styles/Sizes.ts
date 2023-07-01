const size = {
  mobile: '393px',
  tablet: '768px',
  laptop: '1280px',
  desktop: '1440px',
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}

export default device
