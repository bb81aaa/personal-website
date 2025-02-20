import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '~/lib/utils'

const typography = cva(['font-bold inline-block font-ubuntu'], {
  variants: {
    variant: {
      h2: 'text-lg decoration-ring inline-block underline-offset-8 decoration-wavy underline',
      paragraph: 'text-muted-foreground font-normal block text-base font-ubuntu',
    },
    size: {
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
})

export interface ButtonVariants extends VariantProps<typeof typography> {}

export const typo = (variants: ButtonVariants) => cn(typography(variants))
