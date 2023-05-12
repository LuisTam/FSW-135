import React, { useContext } from 'react'
import IssueForm from './IssuesForm.js'
import IssueList from './IssuesList'
import Issue from './Issues'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
    const {
        user: { username },
        addIssue,
        issues
    } = useContext(UserContext)
   
    return(
        <div className='profile'>
            <h1>Welcome {username}!</h1>
            <h3>Add an Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issues</h3>
            <Issue/>
            <IssueList issues={issues}/>
        </div>
    )
}