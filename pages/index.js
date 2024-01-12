import Head from 'next/head'
import {useEffect, useState} from 'react';

const NAMES = [
  "Wind blows through heroine's hair",
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
  "Last wish scene",
  "Slowmo entry of hero/heroine",
  "Big age gap between hero and heroine",
  "Action sequence that defies physics",
  "Unnecessary flashback",
  "Dream sequence song",
  "Lovable estranged nanny",
  "Funeral pyre",
  "Arranged engagement to shallow jerk",
  "True identity is revealed",
  "Toxic family love",
  "No means yes logic",
  "Cop has a mustache"
  // "Wind through SRK's hair",
  // SRK shakes his head condescendingly
  // SRK arms out pose
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
  console.log(NAMES.length)
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

      <div className="h-100 text-center bg-zinc-900">
        <div className='py-4'>
        <span className='text-zinc-100 font-bold'>Bollywood Bingo</span>
        </div>
        <div className="flex flex-col h-100 bg-zinc-900 pt-8 content-center">
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
          {range(14,19).map((e) => <Square key={e} text={shuffled[e]}/>)}
          </Row>
          <Row>
          {range(19,24).map((e) => <Square key={e} text={shuffled[e]}/>)}
          </Row>
        </div>
      </div>
    </div>
  )
}
