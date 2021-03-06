import styled from 'styled-components'



export const FormContainer=styled.div`
    display:flex;
    width:500px;
    height:470px;
    position:relative;
    background: white;
    flex-direction:column;    
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `
export const FormWrapper=styled.div`
    display: flex;
    margin-top:140px;
    margin-left: 35px;
    margin-right: 30px;
    position: relative;
    flex-direction:column;
    justify-content:center;
    align-items: flex-start;

`
export const InputContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin:5px;`


export const Label = styled.div`
    font-size:.8rem;
    font-weight: 300;
    `

export const Input =styled.input`
    width:${props => props.width};
    height:2.5rem;
    border-radius:0.5rem;
    color:black;
    font-size:1rem;
    font-family:inherit;
    ` 

export const Details=styled.div`
    display:flex;
    flex-direction:row;
    margin-top: 10px;
    margin-bottom: 20px;
    align-items:space-between;
    justify-content:space-between;
    `