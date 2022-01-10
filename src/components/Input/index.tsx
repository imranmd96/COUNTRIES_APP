import { InputTS } from '../../types/Input'
import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'


export const Input = ({value, search}: InputTS) => {
    const { state } = useForm()
    const handleChange = (e: string) => {
        search(e)
    }

    return (
        <C.InputArea theme={state.theme}>
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