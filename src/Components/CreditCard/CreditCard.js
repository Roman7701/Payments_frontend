import React, {useState} from 'react'
import {CardContainer,CardWrapper,CardType,CardChip,CardName,CardNumber,CardDetails,HolderName,ExpiryDate, DetailContainer, DetailName,Detail} from './CreditCardStyle'
function CreditCard(props) {
 
    return (
        <CardContainer>
            <CardWrapper>
                    <CardType>
                        <CardChip></CardChip>
                        <CardName></CardName>
                    </CardType>
                <DetailContainer>
                    <DetailName >Card Number</DetailName>
                    <Detail size="1.8rem">{props.values.CardNumber}</Detail>
                </DetailContainer>
                    
                <CardDetails>
                <DetailContainer>
                    <DetailName>Full Name</DetailName>
                    <Detail size="1.2rem">{props.values.FullName}</Detail>
                </DetailContainer>
                <DetailContainer>
                    <DetailName>MM/YY</DetailName>
                    <Detail size="1.2rem">{props.values.ExpiryDate}</Detail>
                </DetailContainer>
                </CardDetails>
            </CardWrapper>
        </CardContainer>
    )
}

export default CreditCard
