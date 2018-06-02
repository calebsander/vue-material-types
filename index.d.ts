//Taken from https://github.com/vuematerial/vue-material/issues/662#issuecomment-308937275

import {PluginFunction} from 'vue'

type ExportProperty
	= 'install'
	| 'MdCore'
	| 'MdAvatar'
	| 'MdBackdrop'
	| 'MdBottomBar'
	| 'MdButton'
	| 'MdButtonToggle'
	| 'MdCard'
	| 'MdCheckbox'
	| 'MdChips'
	| 'MdDialog'
	| 'MdDivider'
	| 'MdFile'
	| 'MdIcon'
	| 'MdImage'
	| 'MdInputContainer'
	| 'MdLayout'
	| 'MdList'
	| 'MdMenu'
	| 'MdProgress'
	| 'MdRadio'
	| 'MdSelect'
	| 'MdSidenav'
	| 'MdSnackbar'
	| 'MdSpeedDial'
	| 'MdSpinner'
	| 'MdSubheader'
	| 'MdSwitch'
	| 'MdTable'
	| 'MdTabs'
	| 'MdToolbar'
	| 'MdTooltip'
	| 'MdWhiteframe'

type Options = {
	[key in ExportProperty]: PluginFunction<never>
}

declare const options: Options

export default options

type Color
	= 'red'
	| 'pink'
	| 'purple'
	| 'deep-purple'
	| 'indigo'
	| 'blue'
	| 'light-blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'light-green'
	| 'lime'
	| 'yellow'
	| 'amber'
	| 'orange'
	| 'deep-orange'
	| 'brown'
	| 'grey'
	| 'blue-grey'
	| 'white'
	| 'black'

type ThemeOption = Color | {
	color?: Color
	hue?: string | number
	textColor?: Color
}

interface ThemeType {
	primary?: ThemeOption
	accent?: ThemeOption
	warn?: ThemeOption
	background?: ThemeOption
}

declare module 'vue/types/vue' {
	interface VueConstructor {
		material: {
			registerTheme(name: string | { [key: string]: ThemeType }, spec?: ThemeType): void,
			setCurrentTheme(name: string): void
		}
	}
}