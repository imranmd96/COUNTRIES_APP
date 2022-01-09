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
    const { name, code } = useParams()

    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState<Country[]>([])

    useEffect(() => {
        if(name) {
            getCountry(name)
        } else if(code) {
            getCountry(code)
        }
    }, [name, code])

    const getCountry = async (param: string) => {
        setLoading(true)
        let country = name ? await api.getCountry(param) : await api.getCountryByCode(param)
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
