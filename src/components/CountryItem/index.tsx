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
        <C.CountryItem>
            <Link to={`/country/${name}`}>
                <div className='img--area'>
                    <img src={flag} alt={`Bandeira do País: ${name}`} />
                </div>
                <div className='data--area'>
                    <p className='country--name'>{name}</p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </Link>
        </C.CountryItem>
    )
}