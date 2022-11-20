import { Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" pb={8} pt={8}>
      &copy; {new Date().getFullYear()} コンピュータ研究会・WINC. All Rights
      Reserved.
    </Box>
  )
}
