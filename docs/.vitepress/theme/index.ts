import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

// default theme imports

import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

// local imports

import HeroImage from '../components/global/HeroImage.vue'
import Address from '../components/global/Address.vue'

// theme imports

import CustomDocAfter from './components/CustomDocAfter.vue'
import CustomNavScreenContentBefore from './components/CustomNavScreenContentBefore.vue'
import CustomSidebarNavBefore from './components/CustomSidebarNavBefore.vue'
import CustomSidebarNavAfter from './components/CustomSidebarNavAfter.vue'

import './styles/custom.scss'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(CustomDocAfter),
      'nav-screen-content-before': () => h(CustomNavScreenContentBefore),
      'sidebar-nav-before': () => h(CustomSidebarNavBefore),
      'sidebar-nav-after': () => h(CustomSidebarNavAfter)
    })
  },
  enhanceApp(context: EnhanceAppContext) {
    context.app.component('VPButton', VPButton)

    context.app.component('HeroImage', HeroImage)
    context.app.component('Address', Address)
  }
}
