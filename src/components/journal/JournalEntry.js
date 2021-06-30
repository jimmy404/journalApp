import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_22.jpg)'
        }}
      >
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Learn something...
        </p>
        <p className="journal__entry-content">
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
