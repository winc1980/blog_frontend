import { Textarea } from '@chakra-ui/react'
import React from 'react'
import { AutoResizeTextarea } from 'components/autoResizeTextArea'

type Props = {
  doc: string
  onChange: (doc: string) => void
}
export default function Editor({ doc, onChange }: Props) {
  return (
    <AutoResizeTextarea
      placeholder="Write in Markdown"
      value={doc}
      onChange={event => onChange(event.target.value)}
      border={'none'}
      focusBorderColor={'none'}
      boxShadow="xl"
    />
  )
}
