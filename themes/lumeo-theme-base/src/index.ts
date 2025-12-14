'use client'

import type { Theme } from './types'

import PageLayout from './layout/PageLayout'

import Heroscreen from './blocks/Heroscreen/Heroscreen'
import HtmlContent from './blocks/HtmlContent/HtmlContent'
import Parallax from './blocks/Parallax/Parallax'
import Text from './blocks/Text/Text'
import TextImage from './blocks/TextImage/TextImage'
import TextImageDouble from './blocks/TextImageDouble/TextImageDouble'
import TextIntro from './blocks/TextIntro/TextIntro'

import Header from './globals/Header/Header'
import Footer from './globals/Footer/Footer'

const theme: Theme = {
  layouts: {
    Page: PageLayout,
  },

  blocks: {
    'heroscreen': Heroscreen,
    'htmlContent': HtmlContent,
    'parallax': Parallax,
    'text': Text,
    'text-image': TextImage,
    'text-image-double': TextImageDouble,
    'text-intro': TextIntro,
  },

  globals: {
    Header,
    Footer,
  },
}

export default theme
