import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='th'>
      <Head >
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </Head>
      <body className="bg-white">
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}