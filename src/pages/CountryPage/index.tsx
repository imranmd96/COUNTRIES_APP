import * as C from './styles'
import { Link, useParams } from 'react-router-dom'
import { SingleCountry } from '../../components/SingleCountry'
import { useEffect, useState } from 'react'
import { api } from '../../api'


interface Country {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    flags: {
        png: string
    }
    topLevelDomain: [
        string
    ],
    currencies: [
        {
            name: string
        }
    ],
    languages: [
        {
            name: string
        }
    ],
    borders: [
        string
    ]
}

export const CountryPage = () => {
    const { name } = useParams()

    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState<Country[]>([])

    useEffect(() => {
        if(name) {
            getCountry(name)
        } 
    }, [name])

    const getCountry = async (name: string) => {
        setLoading(true)
        let country = await api.getCountry(name)
        setCountry(country)
        setLoading(false)
    }

    return (
        <C.CountryPage>
            <Link to="/" className='back--button'>Back</Link>
            {loading &&
                <div>Carregando..</div>
            }
            {!loading &&
                country.map((item) => (
                    <SingleCountry
                        flag={item.flags.png}
                        name={item.name}
                        nativeName={item.nativeName}
                        population={item.population}
                        region={item.region}
                        subregion={item.subregion}
                        capital={item.capital}
                        topLevelDomain={item.topLevelDomain[0]}
                        currencie={item.currencies && item.currencies[0].name}
                        languages={item.languages}
                        borders={item.borders}
                    />
                ))
            }
        </C.CountryPage>
    )
}
