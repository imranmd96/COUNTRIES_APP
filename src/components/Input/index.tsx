import * as C from './styles'

export const Input = () => {
    return (
        <C.InputArea>
            <input type="text" placeholder="Search By Country"/>
            <select value="Filter by Region">
                <option value="Filter by Region">Filter by Region</option>
            </select>
        </C.InputArea>
    )
}