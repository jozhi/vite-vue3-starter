import { App } from 'vue'
import { Button } from 'vant'

/**
 * 按需导入 Element Plus 组件
 * Vite 插件 https://github.com/element-plus/vite-plugin-element-plus
 * @param app {App}
 */
export default function styleImport(app: App) {
  ;[Button].forEach((v) => {
    app.use(v)
  })
  return app
}