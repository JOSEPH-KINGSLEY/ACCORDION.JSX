import { useState } from 'react'
import './App.css';


function App() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if (selected ==i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  
  return (
    <div className='wrapper'>
    <div className='accordion'>

     {data.map((item, i) => (
      <div className='item'>
        <div className='title' onClick={() => toggle(i)}>
          <h2>{item.Question}</h2>
          <span>{selected ==i? '-': '+'}</span>
          </div>
          <div className={selected == i? 'content show': 'content'}>{item.Answer}</div>
          </div>
       ))}

    </div>
    
    </div>
  );
}


const data =[ 
  {
    Question: 'Question 1',
    Answer: 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brother'
    
  },
  {
    Question: 'Question 2',
    Answer: 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brother'
  },
   {
  Question: 'Question 3',
  Answer: 
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brother'
},
{
  Question: 'Question 4',
  Answer: 
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. joezaza is one of the reachest in doings brother joezaza is one of the reachest in doings brotherjoezaza is one of the reachest in doings brother'
},
]



export default App;
