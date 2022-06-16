import { App } from 'vue'
import {
  ElOption,
  ElSelect,
  ElFormItem,
  ElForm,
  ElDialog,
  ElInput,
  ElIcon,
  ElLoading,
  ElCard,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElRadio,
  ElRadioGroup,
  ElRadioButton
} from 'element-plus'

/**
 * 按需导入 Element Plus 组件
 * Vite 插件 https://github.com/element-plus/vite-plugin-element-plus
 * @param app {App}
 */
export default function styleImport(app: App) {
  ;[
    ElOption,
    ElSelect,
    ElFormItem,
    ElForm,
    ElDialog,
    ElInput,
    ElButton,
    ElCard,
    ElLoading,
    ElIcon,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElMenu,
    ElSubMenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElRadio,
    ElRadioGroup,
    ElRadioButton
  ].forEach((v) => {
    app.use(v)
  })
  return app
}
