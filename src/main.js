import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElContainer,
  ElCard,
  ElPopconfirm,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElForm,
  ElFormItem,
  ElHeader,
  ElSelect,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSlider,
  ElSubmenu,
  ElTabs,
  ElTabPane,
  ElTooltip,
  ElTable,
  ElInput,
  ElDatePicker,
  ElTableColumn,
  ElPagination,
  ElDialog,
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElOption,
  ElPopover,
  ElUpload,
  ElTimePicker,
  ElSteps,
  ElCascader,
  ElSwitch,
  ElStep,
  ElRadioGroup,
  ElRadioButton,
  ElRadio,
  ElButtonGroup,
} from 'element-plus'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = { size: 'mini' }
const components = [
  ElAside,
  ElAvatar,
  ElButton,
  ElContainer,
  ElCard,
  ElPopconfirm,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElForm,
  ElFormItem,
  ElHeader,
  ElSelect,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSlider,
  ElSubmenu,
  ElTabs,
  ElTabPane,
  ElTooltip,
  ElTable,
  ElInput,
  ElDatePicker,
  ElTableColumn,
  ElPagination,
  ElDialog,
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElOption,
  ElPopover,
  ElUpload,
  ElTimePicker,
  ElSteps,
  ElCascader,
  ElSwitch,
  ElStep,
  ElRadioGroup,
  ElRadioButton,
  ElRadio,
  ElButtonGroup,
]
const plugins = [
  store,
  router,
  ElLoading,
  ElMessage,
  ElMessageBox
]
components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})
/*const requireZZHLayouts = require.context('zzh-layout', true, /\.vue$/)
requireZZHLayouts.keys().forEach((fileName) => {
  const componentConfig = requireZZHLayouts(fileName)
  const componentName = componentConfig.default.name
  app.component(componentName, componentConfig.default || componentConfig)
})*/
app.mount('#app')
