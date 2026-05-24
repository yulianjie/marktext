import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import elementEn from 'element-ui/lib/locale/lang/en'
import elementZhCN from 'element-ui/lib/locale/lang/zh-CN'
import en from '../../locales/en'
import zhCN from '../../locales/zh-CN'

Vue.use(VueI18n)

export const SUPPORTED_LOCALES = ['en', 'zh-CN']
export const DEFAULT_LOCALE = 'en'

const elementMessages = {
  en: elementEn,
  'zh-CN': elementZhCN
}

const i18n = new VueI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, 'zh-CN': zhCN },
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

export const setLocale = locale => {
  const next = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
  if (i18n.locale !== next) {
    i18n.locale = next
  }
  ElementLocale.use(elementMessages[next])
}

export default i18n
