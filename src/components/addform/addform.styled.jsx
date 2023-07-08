import { styled } from "styled-components";
export const SectionInputs = styled.form`
width: 500px;
margin: auto;
font-size: ${props => props.theme.fontSizes.m}
`

export const NameInputTitle = styled.label`
display: block;
text-align: center;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
`

export const NameInput = styled.input`
display: block;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.fontSizes.m}
`
export const PhoneInputTitle = styled.label`
display: block;
text-align: center;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
`

export const PhoneInput = styled.input`
display: block;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.fontSizes.m}
`
export const Submit = styled.button`
display: block;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[5]}px;
margin: ${props => props.theme.space[4]}px auto;
`
