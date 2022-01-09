import * as C from './styles'
import { Link } from 'react-router-dom'

interface Props {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    topLevelDomain: string,
    currencie: string,
    languages: [{
        name: string
    }],
    flag: string,
    borders: [
        string
    ]
}

export const SingleCountry = ({
    name,
    nativeName,
    population,
    region,
    capital,
    topLevelDomain,
    currencie,
    languages,
    borders,
    flag
}: Props) => {
    return (
        <C.CountryData>
            <img src={flag} alt={`Bandeira do País: ${name}`} />
            <div className='data--area'>
                <h1>{name}</h1>
                <div className='data--firstArea'>
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Capital: </span>{capital}</p>
                    <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                    <p><span>Currencies: </span>{currencie}</p>
                    <p><span>Languages: </span>{languages.map((item, index)=>(<span className='language' key={index}>{item.name}</span>))}</p>
                </div>
                <div className='border--area'>
                    <p>Border Countries: </p>
                    <div className='borders'>{borders && borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link>)}</div> 
                </div>
            </div>
        </C.CountryData>
    )
}