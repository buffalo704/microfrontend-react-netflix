import React, {useEffect, useReducer, useState} from 'react';
import './Widget.css';
import axios from "./axios";
import requests from "./requests";

function Widget() {
  const [open, toggleWidget] = useReducer(open => !open, false);
  const [upcomings, setUpcomings] = useState();

  useEffect(async () => {
      const request = await axios.get(requests.fetchUpcoming);
      setUpcomings(request.data.results);
  },[]);

  const widgetButton = !open && (
    <button className='widget-button' onClick={toggleWidget}>Coming Soon</button>
  )

  const widgetContent = open && (
    <div className='widget-content'>
        {upcomings.slice(0,3).map(upcoming => {
            return (
                <div className='widget-content-card'>
                    <h3>{upcoming.original_title}</h3>
                    <p>Release Date: {upcoming.release_date}</p>
                    <p>{upcoming.overview}</p>
                </div>
            )
        })}
      <button onClick={toggleWidget}>Close</button>
    </div>
  );

  return (
    <div className='widget'>
      {widgetContent}
      {widgetButton}
    </div>
  )
}

export default Widget;
