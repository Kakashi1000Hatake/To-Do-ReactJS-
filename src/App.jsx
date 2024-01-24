import { useState } from 'react'
import './app.css'
import Background from './Components/Background/Background'
import ListContextProvider from './contexts/ListContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (

    <ListContextProvider>
    <Background />
    </ListContextProvider>

    // <div>
    //   <div className="box">
    //     <div className="top">
    //       <div className="input">
    //         <input type="text" className='inputbox' />
    //         <button className='searchBtn'>Search</button>
    //       </div><br />
    //       <div className="filterbox">
    //         <input type="checkbox" name="today" id="filter" /><label className='filterLable'>TODAY</label>
    //         <input type="checkbox" name="tomorrow" id="filter" /><label className='filterLable'>TOMORROW</label>
    //         <input type="checkbox" name="upcoming" id="filter" /><label className='filterLable'>UPCOMING</label>
    //         <input type="checkbox" name="someday" id="filter" /><label className='filterLable'>SOMEDAY</label>
    //       </div>
    //     </div>
    //     <div className="bottom">
    //       <div className="todayEntry">
    //         <h4>Today</h4>
    //         <ul>
              
    //         </ul>
    //       </div>
    //       <div className="tomorrowEntry">
    //       <h4>Tomorrow</h4>
    //         <ul>
              
    //         </ul>
    //       </div>
    //       <div className="upcomingEntry">
    //       <h4>Upcoming</h4>
    //         <ul>
              
    //         </ul>
    //       </div>
    //       <div className="somedayEntry">
    //       <h4>Someday</h4>
    //         <ul>
              
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
