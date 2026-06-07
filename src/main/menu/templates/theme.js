import * as actions from '../actions/theme'

const BUILT_IN = [
  { id: 'light', key: 'light' },
  { id: 'dark', key: 'dark' },
  { id: 'graphite', key: 'graphite' },
  { id: 'material-dark', key: 'materialDark' },
  { id: 'one-dark', key: 'oneDark' },
  { id: 'ulysses', key: 'ulysses' },
  { id: 'minimalist', key: 'minimalist' },
  { id: 'glass', key: 'glass' },
  { id: 'macos', key: 'macos' }
]

export default function (userPreference, userThemes = [], t) {
  const { theme } = userPreference.getAll()

  const submenu = BUILT_IN.map(item => ({
    label: t(`menu.theme.${item.key}`),
    type: 'radio',
    id: item.id,
    checked: theme === item.id,
    click () {
      actions.selectTheme(item.id)
    }
  }))

  if (userThemes.length > 0) {
    submenu.push({ type: 'separator' })
    for (const ut of userThemes) {
      submenu.push({
        label: ut.name || ut.id,
        type: 'radio',
        id: ut.id,
        checked: theme === ut.id,
        click () {
          actions.selectTheme(ut.id)
        }
      })
    }
  }

  return {
    label: t('menu.theme.name'),
    id: 'themeMenu',
    submenu
  }
}
