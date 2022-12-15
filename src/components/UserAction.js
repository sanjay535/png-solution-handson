import React from 'react'

export default function UserAction(props) {
    // console.log(props)
  return (
    <div className='user__action'>
        <div>
        <button onClick={()=>props.handleSortAccordingToName()}>SORT NAME ALPHABETICALLY</button>
        <button onClick={()=>props.handleSortAccordingToAge()}>SORT AGE NUMERICALLY</button>
        </div>
    </div>
  )
}
