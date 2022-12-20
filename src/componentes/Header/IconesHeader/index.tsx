import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    icones: string[],
}

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

export default function IconesHeader({ icones }: Props) {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone key={uuidv4()}><img src={icone} /></Icone>
            ))}
        </Icones>
    );
}