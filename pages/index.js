import Head from 'next/head'
import Image from 'next/image'
const TWITTER_HANDLE = "akvashi24"
const TWITTER_LINK = "https://twitter.com/akvashi24"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Starter by akvashi24</title>
        <meta name="description" content="Hand-made by Adin Vashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen text-center bg-zinc-900">
        <div className="flex flex-col justify-between h-full bg-zinc-900">
          <div className="pt-8 text-center bg-zinc-900">
            <div className="mb-4">
              <span className={"bg-gradient-to-br text-center from-cyan-400 to-purple-500 bg-clip-text text-transparent text-6xl font-black mb-8"}>Next.js Starterpack</span>
            </div>
            <div className="w-1/2 mx-auto overflow-wrap">
              <p className="mb-4 font-2xl text-zinc-100">
                Comes with:
              </p>
              <ul className="mb-4 font-semibold text-white">
                <li>Next.js</li>
                <li>Tailwindcss</li>
              </ul>
              <span className="text-white">That&apos;s it for now!</span>
            </div>
          </div>
          <div className="flex items-center justify-center pt-4">
            <div className='h-7 w-7'>
              <Image alt="Twitter Logo" className="h-7 w-7" height="25px" width="25px" src="/icons/twitter-logo.svg" />
            </div>
            <a
              className="font-semibold text-zinc-100 decoration-cyan-400"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`built by @${TWITTER_HANDLE}`}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
