import { getCurrentWindow, Menu as RemoteMenu, MenuItem as RemoteMenuItem } from '@electron/remote'
import i18n from '@/i18n'
import {
  SEPARATOR,
  NEW_FILE,
  NEW_DIRECTORY,
  COPY,
  CUT,
  PASTE,
  RENAME,
  DELETE,
  SHOW_IN_FOLDER
} from './menuItems'

// Resolve the i18n `labelKey` into a localized `label` at popup time so the
// context menu follows the current language each time it opens.
const localizeItem = item => {
  const { labelKey, ...rest } = item
  return labelKey ? { ...rest, label: i18n.t(labelKey) } : rest
}

export const showContextMenu = (event, hasPathCache) => {
  const menu = new RemoteMenu()
  const win = getCurrentWindow()
  const CONTEXT_ITEMS = [
    NEW_FILE,
    NEW_DIRECTORY,
    SEPARATOR,
    COPY,
    CUT,
    PASTE,
    SEPARATOR,
    RENAME,
    DELETE,
    SEPARATOR,
    SHOW_IN_FOLDER
  ]

  PASTE.enabled = hasPathCache

  CONTEXT_ITEMS.forEach(item => {
    menu.append(new RemoteMenuItem(localizeItem(item)))
  })
  menu.popup([{ window: win, x: event.clientX, y: event.clientY }])
}
