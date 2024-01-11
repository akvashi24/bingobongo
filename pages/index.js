import Head from 'next/head'
import {useEffect, useState} from 'react';
import Image from 'next/image'
const TWITTER_HANDLE = "akvashi24"
const TWITTER_LINK = "https://twitter.com/akvashi24"

const NAMES = [
  "Wind blows in heroine's hair",
  "Hero is sad in the rain",
  "Son is in a rush so mom feeds him",
  "Montage of character being pensive at meetings",
  "Godawful white actor",
  "Song scene in exotic location",
  "Hero and heroine ride on a scooter",
  "Child does bhajan with parents",
  "Police officer is incompetent",
  "Family lives in obscene mansion",
  "Villain crying and apologizing",

  "Son is in a rush so mom feeds him",
  "Montage of character being pensive at meetings",
  "Godawful white actor",
  "Song scene in exotic location",
  "Hero and heroine ride on a scooter",
  "Child does bhajan with parents",
  "Son is in a rush so mom feeds him",
  "Montage of character being pensive at meetings",
  "Godawful white actor",
  "Song scene in exotic location",
  "Hero and heroine ride on a scooter",
  "Child does bhajan with parents",
  "Son is in a rush so mom feeds him",
  "Montage of character being pensive at meetings",
  "Godawful white actor",
  "Song scene in exotic location",
  "Hero and heroine ride on a scooter",
  "Child does bhajan with parents",
]

function shuffle(array) {
  return [...array].sort(() => 0.5 - Math.random())
}

function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};


function Row(props) {
  return(
    <div className='md:px-8 flex flex-row mx-auto w-full'>
      {props.children}
    </div>
  )
}

function Square(props) {
  const [clicked, setClicked] = useState(false)
  return (
  <div onClick={() => setClicked(!clicked)}
  style={{fontSize: '8px'}}
   className={'px-1 aspect-square w-full max-w-12 md:text-base text-xs flex flex-col justify-center text-zinc-100 border' + " " + (clicked ? 'bg-green-500' : '')}
   >{props.text}</div>
  )
}

export default function Home() {
  const [shuffled, setShuffled] = useState([]);
  useEffect(
    ()=> {
      const shuffledNames = shuffle(NAMES)
      console.log('s', shuffledNames)
      setShuffled(shuffledNames)
    }, [])
  console.log(shuffled)
  return (
    <div>
      <Head>
        <title>Bollywood Bingo</title>
        <meta name="description" content="Hand-made by Adin Vashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen sm:h-100 text-center bg-zinc-900">
        <div className='py-4'>
        <span className='text-zinc-100 font-bold'>Bollywood Bingo</span>
        </div>
        <div className="flex flex-col h-full bg-zinc-900 pt-8 content-center">
          <Row>
            {range(0,5).map((e) => <Square key={e} text={shuffled[e]}/>)}
          </Row>
          <Row>
          {range(5,10).map((e) => <Square key={e} text={shuffled[e]}/>)}
          </Row>
          <Row>
            <Square key={10} text={shuffled[10]} />
            <Square key={11} text={shuffled[11]} />
            <Square key={50} text='FREE'/>
            <Square key={12} text={shuffled[12]} />
            <Square key={13} text={shuffled[13]} />
          </Row>
          <Row>
          {range(13,18).map((e) => <Square key={e} text={shuffled[e]}/>)}
          </Row>
          <Row>
          {range(18,23).map((e) => <Square key={e} text={shuffled[e]}/>)}
          </Row>
        </div>
      </div>
    </div>
  )
}
