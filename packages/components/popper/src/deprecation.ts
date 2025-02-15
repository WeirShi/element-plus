import { computed, getCurrentInstance } from 'vue'
import { useDeprecated } from '@element-plus/hooks'
import { isBool } from '@element-plus/utils/util'

export function useDeprecateAppendToBody(scope: string, from: string) {
  const vm = getCurrentInstance()!

  const compatTeleported = computed(() => {
    return (
      isBool(vm.props[from]) ? vm.props[from] : vm.props.teleported
    ) as boolean
  })

  useDeprecated(
    {
      scope,
      from,
      replacement: 'teleported',
      version: '2.1.0',
      ref: 'https://element-plus.org/en-US/component/tooltip.html#attributes',
    },
    computed(() => isBool(vm.props[from]))
  )

  return {
    compatTeleported,
  }
}
