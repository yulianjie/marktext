import * as contextMenu from './actions'

// NOTE: This are mutable fields that may change at runtime.
// `labelKey` is an i18n key resolved at popup time so the menu follows the
// current language (see ./index.js).

export const SEPARATOR = {
  type: 'separator'
}

export const CLOSE_THIS = {
  labelKey: 'contextMenu.tabs.close',
  id: 'closeThisTab',
  click (menuItem, browserWindow) {
    contextMenu.closeThis(menuItem._tabId)
  }
}

export const CLOSE_OTHERS = {
  labelKey: 'contextMenu.tabs.closeOthers',
  id: 'closeOtherTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeOthers(menuItem._tabId)
  }
}

export const CLOSE_SAVED = {
  labelKey: 'contextMenu.tabs.closeSaved',
  id: 'closeSavedTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeSaved()
  }
}

export const CLOSE_ALL = {
  labelKey: 'contextMenu.tabs.closeAll',
  id: 'closeAllTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeAll()
  }
}

export const RENAME = {
  labelKey: 'contextMenu.tabs.rename',
  id: 'renameFile',
  click (menuItem, browserWindow) {
    contextMenu.rename(menuItem._tabId)
  }
}

export const COPY_PATH = {
  labelKey: 'contextMenu.tabs.copyPath',
  id: 'copyPath',
  click (menuItem, browserWindow) {
    contextMenu.copyPath(menuItem._tabId)
  }
}

export const SHOW_IN_FOLDER = {
  labelKey: 'contextMenu.tabs.showInFolder',
  id: 'showInFolder',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder(menuItem._tabId)
  }
}
