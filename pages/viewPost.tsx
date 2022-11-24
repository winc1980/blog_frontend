import Layout from 'components/layouts/viewPost'
import { FormControl } from '@chakra-ui/react'
import Preview from 'components/editor/preview'

export default function ViewPost() {
  const doc = `
  # はじめに

こんにちわ

1. a
2. b
3. c

# リスト
- a
- b
- c

\`\`\`python
def hello:
    return 'hello'
\`\`\`

### 画像

![](https://storage.googleapis.com/zenn-user-upload/f5b41880ca38-20221124.jpg)
  `
  return (
    <Layout>
      <FormControl>
        <Preview doc={doc} />
      </FormControl>
    </Layout>
  )
}
