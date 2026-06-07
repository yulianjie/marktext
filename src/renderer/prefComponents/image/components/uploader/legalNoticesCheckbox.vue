<template>
  <div class="pref-cb-legal-notices">
    <el-checkbox v-model="uploaderService.agreedToLegalNotices"></el-checkbox>
    <span>
      {{ $t('image.legalNotice.prefix', { name: uploaderService.name }) }}
      <span class="link" @click="openUrl(uploaderService.privacyUrl)">{{ $t('image.legalNotice.privacy') }}</span>
      {{ $t('image.legalNotice.and') }}
      <span class="link" @click="openUrl(uploaderService.tosUrl)">{{ $t('image.legalNotice.tos') }}</span>.
      <span v-if="!uploaderService.isGdprCompliant">{{ $t('image.legalNotice.gdpr') }}</span>
    </span>
  </div>
</template>

<script>
import { shell } from 'electron'

export default {
  data () {
    return {}
  },
  props: {
    uploaderService: Object
  },
  methods: {
    openUrl (link) {
      if (link) {
        shell.openExternal(link)
      }
    }
  }
}
</script>

<style>
.pref-cb-legal-notices {
  border: 1px solid transparent;
  padding: 3px 5px;
  & .el-checkbox {
    margin-right: 0;
  }
}
</style>
