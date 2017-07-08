//Taken from https://github.com/vuematerial/vue-material/issues/662#issuecomment-308937275

import {PluginFunction} from 'vue'

type ExportProperty = 'install'
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