import React from 'react'
import WorkloadUser from '../WorkloadUser/WorkloadUser'
import ViewAllBtn from '../ViewAllBtn/ViewAllBtn';

import './Workload.css'

export default function Workload() {

    const user = [
        { id: 1, name: 'امین احمدی', skill: 'frontEnd', level: 'Senior' },
        { id: 2, name: 'پارسا احمدی', skill: 'backEnd', level: 'Senior' },
        { id: 3, name: 'امیر', skill: 'C++', level: 'Junior' },
        { id: 4, name: 'علی میری', skill: 'C##', level: 'Senior' }, 
        { id: 5, name: 'رضا احمدی', skill: 'Fluter', level: 'Middle' },
        { id: 6, name: 'سعید', skill: 'Php', level: 'Middle' },
        { id: 7, name: 'پیام', skill: 'Wordpress', level: 'Junior' },
        { id: 1, name: 'امین احمدی', skill: 'فرانت اند', level: 'Senior' },
    ]
    console.log(user)
    return (
        <div className='workload col-8'>
            <div className='workload__header'>
                <h2>حجم کار</h2>
                <ViewAllBtn/>
            </div>

            <div className='woekload-user col-12'>
                {user.map((us) => (
                    <WorkloadUser
                        key={us.id}
                        name={us.name}
                        skill={us.skill}
                        level={us.level}
                    />
                ))}
            </div>

        </div>
    )
}
