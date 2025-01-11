import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default {
  install(app: { component: (arg0: string, arg1: any) => void }) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()!
            .replace(/\.\w+$/, '')
        )
      )
      // export default
      app.component(`${componentName}`, (module as any).default)
    })
  }
}
