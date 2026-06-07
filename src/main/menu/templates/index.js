import edit from './edit'
import prefEdit from './prefEdit'
import file from './file'
import help from './help'
import marktext from './marktext'
import view from './view'
import window from './window'
import paragraph from './paragraph'
import format from './format'
import theme from './theme'

export { default as buildDockMenu } from './dock'

/**
 * Create the setting window menu.
 *
 * @param {Keybindings} keybindings The keybindings instance
 * @param {(key: string) => string} t Locale-bound translator
 */
export const configSettingMenu = (keybindings, t) => {
  return [
    ...(process.platform === 'darwin' ? [marktext(keybindings, t)] : []),
    prefEdit(keybindings, t),
    help(t)
  ]
}

/**
 * Create the application menu for the editor window.
 *
 * @param {Keybindings} keybindings The keybindings instance.
 * @param {Preference} preferences The preference instance.
 * @param {string[]} recentlyUsedFiles The recently used files.
 * @param {Array<{id:string,name:string}>} userThemes The user-defined themes loaded from the userData/themes folder.
 * @param {(key: string) => string} t Locale-bound translator.
 */
export default function (keybindings, preferences, recentlyUsedFiles, userThemes = [], t) {
  return [
    ...(process.platform === 'darwin' ? [marktext(keybindings, t)] : []),
    file(keybindings, preferences, recentlyUsedFiles, t),
    edit(keybindings, t),
    paragraph(keybindings, t),
    format(keybindings, t),
    window(keybindings, t),
    theme(preferences, userThemes, t),
    view(keybindings, t),
    help(t)
  ]
}
