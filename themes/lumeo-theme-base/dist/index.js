import PageLayout from './layouts/Page.js'

import TextImageBlock from './blocks/TextImage.js'
import HeroBlock from './blocks/Hero.js'

import './styles.css'

const theme = {
  meta: {
    name: 'Lumeo Base Theme',
    version: '0.1.0',
  },

  layouts: {
    Page: PageLayout,
  },

  blocks: {
    'text-image': TextImageBlock,
    'hero': HeroBlock,
  },

  globals: {
    // Header,
    // Footer,
  },
}

export default theme
