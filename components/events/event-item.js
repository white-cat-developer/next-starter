import React from 'react';

import Link from 'next/link';
import classes from './event-item.module.css';

const EventItem = (props) => {

    const { id, title, image, date, location } = props;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>
                            {new Date(date).toLocaleString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </time>
                    </div>
                    <div className={classes.address}>
                        <address>
                            {location.replace(', ', '\n')}
                        </address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={`/events/${id}`}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
