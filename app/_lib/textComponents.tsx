import Text from '@/components/shared/ui/Text'

interface prop {
  children: React.ReactNode
}

export const text = {
  h1: ({ children }: prop ) => (
    <Text variant="h1" className='font-bold'>
      {children}
    </Text>
  ),
  p: ({children}: prop) => (
    <Text variant="p">
      {children}
    </Text>
  ),
}
