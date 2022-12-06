import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET ?? ''
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      return session
    },
    async signIn({ account }) {
      const response = await fetch('https://api.winc.ne.jp/members/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: account?.access_token })
      })
      console.log(response)

      if (response['statusText'] === 'OK') {
        return true
      } else {
        return false
      }
    }
  }
})
