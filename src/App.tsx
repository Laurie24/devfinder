import './scss/App.scss'

import React, { useEffect, useRef, useState } from 'react'

import Card from './components/Card'
import Navbar from './components/Navbar'
import SearchField from './components/SearchField'

function App() {
    const [userData, setUserData] = useState({})
    const [invalidName, setInvalidName] = useState(false)
    const [githubUsername, setGithubUsername] = useState('laurie24')

    const usernameInputRef = useRef<HTMLInputElement>(null)

    const usernameSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredUsername = usernameInputRef.current!.value
        setGithubUsername(enteredUsername)
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${githubUsername}`)
            const result = await response.json()
            const {
                avatar_url,
                name,
                created_at,
                bio,
                public_repos,
                followers,
                following,
                location,
                twitter_username,
                blog,
                company,
            } = result
            setUserData({
                avatar_url,
                name,
                created_at,
                bio,
                public_repos,
                followers,
                following,
                location,
                twitter_username,
                blog,
                company,
                githubUsername,
            })

            if (response.ok) {
                setInvalidName(false)
            }

            if (response.status === 404) {
                console.log('User not found')
                setInvalidName(true)
            }
        }
        fetchData()
    }, [githubUsername])

    return (
        <div className="app">
            <Navbar />
            <SearchField
                invalidUsername={invalidName}
                usernameInputRef={usernameInputRef}
                usernameSubmitHandler={usernameSubmitHandler}
            />
            {!invalidName && <Card userData={userData} />}
        </div>
    )
}

export default App
