import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  size: [String, Number] as PropType<string | number>,
  color: String
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>