import React from 'react'
import EventItem from './event-item'
import classes from './event-list.module.css'

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map(item => <EventItem key={item.id} id={item.id} title={item.title} location={item.location} image={item.image} date={item.date}/>)}
    </ul>
  )
}

export default EventList
