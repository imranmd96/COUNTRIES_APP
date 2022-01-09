import { ChangeEvent, useState } from 'react'
import * as C from './styles'

interface Props {
    value: string,
    search: (e: string) => void
}

export const Input = ({value, search}: Props) => {
    
    const handleChange = (e: string) => {
        search(e)
    }

    return (
        <C.InputArea>
            <input
                type="text"
                placeholder="Search By Country"
                value={value}
                onChange={e => handleChange(e.target.value)}
            />
            <select value="Filter by Region" onChange={e => handleChange(e.target.value)}>
                <option disabled selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </C.InputArea>
    )
}