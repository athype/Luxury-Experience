import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Athype Gateway" />
        <p className="description">
          This site is a gateway to Athype's communities
        </p>
      </main>

      <Footer />
    </div>
  )
}
