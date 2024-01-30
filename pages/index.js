import Head from 'next/head'
import {useEffect, useState} from 'react';

const NAMES = [
  "Wind blows through heroine's hair",
  "Hero is sad in the rain",
  "Son is in a rush so mom feeds him",
  "Montage of character being pensive",
  "Godawful white actor",
  "Song scene in exotic location",
  "Hero and heroine ride on a scooter",
  "Child does ritual with parents",
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
  "Cop has a mustache",
  "Hero grabs heroine's wrist too aggressively"
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

const BOARD_SIZE = 5


export default function Home() {
  const [shuffled, setShuffled] = useState([]);
  const [squares, setSquares] = useState(Array.from({ length: 25 }, () => false))
  const [bingo, setBingo] = useState(false)

  useEffect(
    ()=> {
      const shuffledNames = shuffle(NAMES)
      setShuffled(shuffledNames)
    }, [])

  const checkBingo = (list) => {
    let tempBingo = false;
    const winners = [
      range(0,5),
      range(5,10),
      range(10,15),
      range(15,20),
      range(20,25),
      range(0,25,5),
      range(1,25,5),
      range(2,25,5),
      range(3,25,5),
      range(4,25,5),
      [0,6,12,18,24],
      [4,8,12,16,20],
    ]
    for (const indices of winners) {
      const values = indices.map((index) => list[index])
      const winner = values.reduce((acc, value) => acc && value, true)
      if (winner) {
        tempBingo = true
        setBingo(tempBingo)
        break
      }
    }
    if (!tempBingo) {
      setBingo(false)
    }
  }

  function Square(props) {
    const handleClick = () => {
      const newList = [...squares]
      newList[props.index] = !newList[props.index]
      setSquares(newList)
      checkBingo(newList)
    }

    const imageUrl = 'https://st1.latestly.com/wp-content/uploads/2022/06/Shah-Rukh-Khan-Pose.jpg'
    const SRK = bingo && !squares[props.index]
    return (
    <div onClick={handleClick}
    style={SRK ? {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',  // You can adjust the background size based on your needs
      backgroundPosition: 'center', // 
    } : null}
      className={'px-1 md:px-4 overflow-scroll-y aspect-square border-box w-full max-w-48 md:text-lg text-xs flex flex-col justify-center text-zinc-100 border' + " " + (squares[props.index] ? 'bg-green-600' : '')}
      >{SRK ? null : props.text}</div>
    )
  }

  function Row(props) {
    return(
      <div className='md:px-8 flex flex-row mx-auto w-full justify-center'>
        {props.children}
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Bollywood Bingo</title>
        <meta name="description" content="Hand-made by Adin Vashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen sm:h-100 bg-zinc-900">
        <div className='py-6'>
        <span className='px-4 sm:px-32 text-zinc-100 font-bold'>Bollywood Bingo</span>
        </div>
        <div className="flex flex-col h-100 bg-zinc-900 pb-16 content-center px-1 text-center ">
          <Row>
            {range(0,5).map((e) => <Square key={e} index={e} text={shuffled[e]} />)}
          </Row>
          <Row>
          {range(5,10).map((e) => <Square key={e} index={e} text={shuffled[e]}/>)}
          </Row>
          <Row>
            <Square key={10} index={10} text={shuffled[10]} />
            <Square key={11} index={11} text={shuffled[11]} />
            <Square key={50} index={12} text='FREE'/>
            <Square key={12} index={13} text={shuffled[12]} />
            <Square key={13} index={14} text={shuffled[13]} />
          </Row>
          <Row>
          {range(15,20).map((e) => <Square key={e} index={e} text={shuffled[e]}/>)}
          </Row>
          <Row>
          {range(20,25).map((e) => <Square key={e} index={e} text={shuffled[e]}/>)}
          </Row>
        <div className='text-center bg-zinc-900 mt-8'>
          { bingo ? 
            <span className='text-green-500 font-bold text-5xl animate-pulse uppercase'>
              Bingo!
          </span>
          : null
          }
        </div>
        </div>
      </div>
    </div>
  )
}
