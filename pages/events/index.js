import React from 'react'

import { getFeaturedEvents } from '../../assets/dummy-data'
import EventList from '../../components/events/event-list';

const index = () => {

    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}

export default index
