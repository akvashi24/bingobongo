import Head from 'next/head'
import {useState} from 'react';
import Image from 'next/image'
const TWITTER_HANDLE = "akvashi24"
const TWITTER_LINK = "https://twitter.com/akvashi24"

const NAMES = [
  "Wind blows in heroine's hair",
  "Hero is sad in the rain",
  "Son is in a rush so mom feeds him",
  "Monage of character being pensive at meetings",
  "Godawful white actor",
  "Song scene in exotic location",
  "Hero and heroine ride on a scooter",
  ""
]

function Row(props) {
  return(
    <div className='px-8 flex flex-row mx-auto'>
      {props.children}
    </div>
  )
}

function Square(props) {
  const [clicked, setClicked] = useState(false)
  return (
  <div onClick={() => setClicked(!clicked)}
   className={'h-48 w-48 flex flex-col justify-center text-zinc-100' + " " + (clicked ? 'bg-green-500' : '') + " " + props.classes}>
    {props.text}
  </div>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Starter by akvashi24</title>
        <meta name="description" content="Hand-made by Adin Vashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen text-center bg-zinc-900">
        <div className='py-4'>
        <span className='text-zinc-100 font-bold'>Bollywood Bingo</span>
        </div>
        <div className="flex flex-col h-full bg-zinc-900 pt-8 content-center">
          <Row>
            <Square text='wthat in tarnation'/>
            <Square classes='border-l border-r'/>
            <Square classes='border-l border-r'/>
            <Square classes='border-l border-r'/>
            <Square/>
          </Row>
          <Row>
            <Square classes='border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-t border-b'/>
          </Row>
          <Row>
            <Square classes='border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-r border-l border-t border-b' text='FREE'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-t border-b'/>
          </Row>
          <Row>
            <Square classes='border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-r border-l border-t border-b'/>
            <Square classes='border-t border-b'/>
          </Row>
          <Row>
            <Square/>
            <Square classes='border-r border-l'/>
            <Square classes='border-r border-l'/>
            <Square classes='border-r border-l'/>
            <Square/>
          </Row>
          
        </div>
      </div>
    </div>
  )
}
