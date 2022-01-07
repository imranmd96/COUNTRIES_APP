import * as C from './styles'
import { Link } from 'react-router-dom'

interface Props {
    name: string,
    capital: string,
    population: number,
    region: string,
    flag: string
}

export const CountryItem = ({name, population, region, capital, flag}: Props) => {
    return (
        <Link to={`/country/${capital}`}>
            <img src={flag} alt={`Bandeira do País: ${name}`} />
            <p>Name: <span>{name}</span></p>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
        </Link>
    )
}