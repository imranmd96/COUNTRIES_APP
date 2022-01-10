export interface SingleCountryTS {
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