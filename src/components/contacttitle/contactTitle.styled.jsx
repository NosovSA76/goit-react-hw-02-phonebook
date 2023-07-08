import { styled } from "styled-components";

export const ContactTitle = styled.section`
display: flex;
`

export const ContactTitleText = styled.h2`
`

export const VisibleNoVisibleButton = styled.button`
display: block;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[5]}px;
margin: ${props => props.theme.space[4]}px auto;
`
