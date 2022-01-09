import * as C from './styles'
import { useEffect, useMemo, useState } from 'react'
import { Input } from '../../components/Input'
import { api } from '../../api'
import { CountryItem } from '../../components/CountryItem'

interface Countries {
    name: string,
    capital: string,
    population: number,
    region: string,
    numericCode: string,
    flags: {
        png: string
    }
}

export const Countries = () => {
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState<Countries[]>([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        getAllCountries()
    }, [])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        setLoading(false)
    }

    const lowerSearch = search.toLowerCase()

    const filteredCountries = countries.filter(country => country
        .name.toLowerCase().includes(lowerSearch) || country.
        region.toLowerCase().includes(lowerSearch));

    return (
        <C.CountriesArea>
            <Input
                value={search}
                search={setSearch}
            />
            <div className='countries'>
                {loading &&
                    <div>Carregando...</div>
                }
                {!loading &&
                    filteredCountries.map((item) => (
                        <CountryItem
                            key={item.numericCode}
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                        />
                    ))
                }
            </div>
        </C.CountriesArea>
    )
}