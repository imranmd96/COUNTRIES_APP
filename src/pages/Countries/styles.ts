import styled from "styled-components";

export const CountriesArea = styled.main`
    .countries {
        display: grid;
        width: 1024px;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }
`