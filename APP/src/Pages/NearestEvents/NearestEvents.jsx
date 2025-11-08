import React from 'react'
import ViewAllBtn from '../../Components/ViewAllBtn/ViewAllBtn'
import Event from '../../Components/Event/Event'

import './NearestEvents.css'

export default function NearestEventss() {
    const events = [
        { id: 1, title: 'معرفی دپارتمان', time: 5, color: '#3F8CFF' },
        { id: 2, title: 'تولد انا', time: 6, color: '#DE92EB' },
        { id: 3, title: 'بازدید', time: 17, color: '#DE92EB' },
        { id: 4, title: 'فوتبال', time: 22, color: '#DE92EB' },
        { id: 5, title: 'جلسه', time: 23, color: '#3F8CFF' },
        { id: 6, title: 'تمرین', time: 24, color: '#DE92EB' },
    ]

    return (
        <>

            <div className='back-btn'>
                <ViewAllBtn to={'/'} title={'برگشت به داشبورد'} />
            </div>

            <div className='NearestEvents__header d-flex justify-content-between align-items-center mb-3'>
                <div className='NearestEvents__header--title'>
                    <h3>رویداد های نزدیک</h3>
                </div>
                <div className='NearestEvents__header--addEvent'>
                    <button className='btn btn-primary'>رویداد جدید</button>
                </div>
            </div>

            <div className='NearestEvents__event'>
                <div className='row d-flex justify-content-between' >
                    {events.map(event => (
                        <div key={event.id} className='col-5-5 mb-3 ml-1' style={{ background: 'white', borderRadius: 10 }}>
                            <Event
                                title={event.title}
                                time={event.time}
                                color={event.color}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}