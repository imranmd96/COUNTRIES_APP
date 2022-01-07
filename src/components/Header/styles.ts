import styled from "styled-components";

export const Header = styled.header`
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
    .container {
        display: flex;
        width: 992px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        p {
            cursor: pointer
        }
    }
`