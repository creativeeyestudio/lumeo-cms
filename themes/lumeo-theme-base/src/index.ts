import type { Theme } from '@cms/core/theme'

import { PageLayout } from './layouts/Page'

// Blocks
import { TextImageBlock } from './blocks/TextImage'
import { HeroBlock } from './blocks/Hero'

const theme: Theme = {
  meta: {
    name: 'Example Theme',
    version: '1.0.0',
  },

  layouts: {
    Page: PageLayout,
  },

  blocks: {
    'text-image': TextImageBlock,
    hero: HeroBlock,
  },

  globals: {
    // Header,
    // Footer,
  },
}

export default theme
