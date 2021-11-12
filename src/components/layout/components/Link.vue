
<template>
  <component
    :is="isPros(to)"
    v-bind="linkProps(to)"
  >
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isPros (url) {
      if (isExternal(url)) {
        return 'a'
      } else {
        return 'router-link'
      }
    },
    linkProps (url) {
      if (isExternal(url)) {
        return {
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: url
      }
    }
  }
}
</script>
