import styled from '.'

const size = {
  mobileSmall: '320px',
  mobileMedium: '360px',
  mobileLarge: '480px',
  tabletPortrait: '768px',
  tabletLandscape: '960px',
  desktopSmall: '1024px',
  desktopMedium: '1280px',
  desktopLarge: '1440px',
  desktopExtraLarge: '1600px'
}

const device = {
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  mobileMedium: `(min-width: ${size.mobileMedium})`,
  mobileLarge: `(min-width: ${size.mobileLarge})`,
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  desktopSmall: `(min-width: ${size.desktopSmall})`,
  desktopMedium: `(min-width: ${size.desktopMedium})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`,
  desktopExtraLarge: `(min-width: ${size.desktopExtraLarge})`
}

export const MobileOnly = styled.div`
  display: block;

  @media ${device.tabletPortrait} {
    display: none;
  }
`

export const TabletOrGreater = styled.div`
  display: none;

  @media ${device.tabletPortrait} {
    display: block;
  }
`

export default device
