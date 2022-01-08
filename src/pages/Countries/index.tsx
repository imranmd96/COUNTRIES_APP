import * as C from './styles'
import { useEffect, useState } from 'react'
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
    const [countries, setCountries] = useState<Countries[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllCountries()
    }, [])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        setLoading(false)
    }

    return (
        <C.CountriesArea>
            <Input />
            <div className='countries'>
                {loading &&
                    <div>Carregando...</div>
                }
                {!loading &&
                    countries.map((item) => (
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