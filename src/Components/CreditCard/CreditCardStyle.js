import styled from 'styled-components'
import BgImage from '../Shared/unnamed.png';
import Chip from '../Shared/chip.png'
import {SiVisa} from 'react-icons/si'

export const CardContainer=styled.div`
    display:flex;
    height:250px;
    width:450px;
    position: absolute;
    top: -150px;
    left: 30px;
    background:url(${BgImage});
    flex-direction: column;
    border: 2px yellow;
    border-radius:1rem;

    `
export const CardWrapper=styled.div`
    display:flex;
    flex-direction:column;
    margin:30px;
    position: relative;
`
export const CardType=styled.div`
    display:flex;
    flex-direction:row;
    margin:10px;
    justify-content:space-between;`
export const CardChip=styled.div`
    width: 50px;
    height:50px;
    background-image: url(${Chip});
    background-size:100% 100%;
    mix-blend-mode: multiply;
    `
export const CardName=styled(SiVisa)`
    font-size:6rem;
    color:white;
    
    margin-top:-20px;
    `

export const CardDetails=styled.div`
    display:flex;
    flex-direction:row;
    align-items: stretch;
    justify-content:space-between;
    margin-top:30px;`


export const DetailContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;`

export const DetailName=styled.div`
            font-weight: 200;
            opacity: 0.8;
            color: white;
            font-size: .8rem;`

export const Detail=styled.div`
        font-size:${props=>props.size};
        color:white;
        width:fit-content;
        position:relative;
`