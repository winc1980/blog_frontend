import type React from 'react'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import 'github-markdown-css/github-markdown.css'
import ReactMarkdown from 'react-markdown'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import styles from 'styles/react-markdown.module.css'
import { Box } from '@chakra-ui/react'

interface Props {
  doc: string
  height?: number
}

const Preview = ({ height, ...props }: Props) => {
  return (
    <Box
      className="preview markdown-body"
      boxShadow="xl"
      pl={'4'}
      pr={'4'}
      pt={'2'}
      pb={'2'}
      height={height ? height : 'atuo'}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className={styles.reactMarkDown}
        components={{
          pre({ node, ...props }) {
            return <pre {...props} />
          },
          code({
            node,
            inline,
            className,
            children,
            style,
            ...props
          }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={prism}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {props.doc}
      </ReactMarkdown>
    </Box>
  )
}

export default Preview
