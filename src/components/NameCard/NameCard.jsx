import React from 'react';
import './NameCard.css'

const nameCheapUrl="https://www.namecheap.com/domains/registration/results/?domain=%27%3B"

const NameCard = ({suggestedName})=>{
    return(
       <a className='card-link' href={`${nameCheapUrl}${suggestedName}`} 
       rel="noreferrer"
       target ="_blank">

            <div className='result-name-card'>
            <p className="result-name">{suggestedName}</p>
            
        </div>
       </a>
    )
}
export default NameCard;
