import { Box, Button, Input } from '@chakra-ui/react'
import Layout from 'components/layouts/post'
import { FormControl } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import { IconButton } from '@chakra-ui/react'
import { SlPencil } from 'react-icons/sl'
import { FiPlay } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi'
import Editor from 'components/editor/editor'
import Preview from 'components/editor/preview'

export default function Post() {
  // write, preview, both
  const [mode, setMode] = useState<string>('write')
  const updateMode = (mode: string) => {
    console.log(doc)
    setMode(mode)
  }

  const [doc, setDoc] = useState<string>('')
  const updateDoc = (doc: string) => {
    setDoc(doc)
  }

  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  // 高さを監視して、writeとpreviewで高さを揃える
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setHeight(entries[0].contentRect.height)
    })

    for (const elem of [ref]) {
      elem.current && resizeObserver.observe(elem.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <Layout>
      <Box display={'flex'} gap={'50px'}>
        <FormControl>
          <Input
            placeholder="タイトル"
            mb={'8'}
            focusBorderColor={'none'}
            mt={'4'}
          />

          <Box display={'flex'} w={'full'} gap={4} mb={'8'}>
            <Box
              w={'full'}
              position={mode === 'preview' ? 'absolute' : 'unset'}
              visibility={mode === 'preview' ? 'hidden' : 'unset'}
              ref={ref}
            >
              <Editor doc={doc} onChange={updateDoc} />
            </Box>
            <Box
              w={'full'}
              position={mode === 'write' ? 'absolute' : 'unset'}
              visibility={mode === 'write' ? 'hidden' : 'unset'}
            >
              <Preview doc={doc} height={height} />
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button alignContent={'right'} colorScheme="blue">
              投稿
            </Button>
          </Box>
        </FormControl>
        <ModeRadioButton mode={mode} updateMode={updateMode} />
      </Box>
    </Layout>
  )
}

type ModeRadioButtonProps = {
  mode: string
  updateMode: (mode: string) => void
}
function ModeRadioButton({ mode, updateMode }: ModeRadioButtonProps) {
  return (
    <Box
      backgroundColor={'white'}
      position={'sticky'}
      top={'120px'}
      height={'200px'}
    >
      <Box>
        <IconButton
          aria-label="write"
          icon={<SlPencil />}
          borderRadius={'50%'}
          _hover={{
            boxShadow: mode === 'write' ? 'none' : '',
            backgroundColor: mode === 'write' ? '' : 'gray.200'
          }}
          backgroundColor={mode === 'write' ? 'lightblue' : 'white'}
          onClick={() => updateMode('write')}
        />
      </Box>
      <Box mt={'2'}>
        <IconButton
          aria-label="both"
          icon={<HiOutlineBookOpen />}
          borderRadius={'50%'}
          _hover={{
            boxShadow: mode === 'both' ? 'none' : '',
            backgroundColor: mode === 'both' ? '' : 'gray.200'
          }}
          backgroundColor={mode === 'both' ? 'lightblue' : 'white'}
          onClick={() => updateMode('both')}
        />
      </Box>
      <Box mt={'2'}>
        <IconButton
          aria-label="preview"
          icon={<FiPlay />}
          borderRadius={'50%'}
          _hover={{
            boxShadow: mode === 'preview' ? 'none' : '',
            backgroundColor: mode === 'preview' ? '' : 'gray.200'
          }}
          backgroundColor={mode === 'preview' ? 'lightblue' : 'white'}
          onClick={() => updateMode('preview')}
        />
      </Box>
    </Box>
  )
}
