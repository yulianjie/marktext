import * as contextMenu from './actions'

// NOTE: This are mutable fields that may change at runtime.
// `labelKey` is an i18n key resolved at popup time so the menu follows the
// current language (see ./index.js).

export const SEPARATOR = {
  type: 'separator'
}

export const NEW_FILE = {
  labelKey: 'contextMenu.sideBar.newFile',
  id: 'newFileMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.newFile()
  }
}

export const NEW_DIRECTORY = {
  labelKey: 'contextMenu.sideBar.newDirectory',
  id: 'newDirectoryMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.newDirectory()
  }
}

export const COPY = {
  labelKey: 'contextMenu.sideBar.copy',
  id: 'copyMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copy()
  }
}

export const CUT = {
  labelKey: 'contextMenu.sideBar.cut',
  id: 'cutMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.cut()
  }
}

export const PASTE = {
  labelKey: 'contextMenu.sideBar.paste',
  id: 'pasteMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.paste()
  }
}

export const RENAME = {
  labelKey: 'contextMenu.sideBar.rename',
  id: 'renameMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.rename()
  }
}

export const DELETE = {
  labelKey: 'contextMenu.sideBar.delete',
  id: 'deleteMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.remove()
  }
}

export const SHOW_IN_FOLDER = {
  labelKey: 'contextMenu.sideBar.showInFolder',
  id: 'showInFolderMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder()
  }
}
