import './../scss/SearchField.scss'

import React, { FormEventHandler, RefObject } from 'react'

import IconSearch from './../assets/icon-search.svg'

interface SearchInputProps {
    invalidUsername: boolean
    usernameInputRef: RefObject<HTMLInputElement>
    usernameSubmitHandler: FormEventHandler<HTMLFormElement>
}

const SearchField: React.FC<SearchInputProps> = (props) => {
    return (
        <form className="search" onSubmit={props.usernameSubmitHandler}>
            <img alt="icon-search" src={IconSearch} />
            <input placeholder="Search GitHub username…" ref={props.usernameInputRef} />
            {props.invalidUsername ? <span>No results</span> : null}
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchField
