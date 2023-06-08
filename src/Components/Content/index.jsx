import { useSelector,useDispatch } from "react-redux"
import  { useEffect } from 'react'
import styled from "styled-components"

import { fetchData } from "../../redux/textSlice"

import Spinner from "../Spiner"

const ContentSection = styled.section`
min-height: 20rem;
background-color: #23272F;
color:#f7f1e3;
margin-top: 2rem;
border-radius: .5rem;
padding: 2rem;
line-height: 1.5rem;
font-size: 1rem;
-webkit-box-shadow: 0px 5px 10px 0px rgba(44, 44, 84, 0.75);
-moz-box-shadow:    0px 5px 10px 0px rgba(44, 44, 84, 0.75);
box-shadow:         0px 5px 10px 0px rgba(44, 44, 84, 0.75);
`

const Content = () => {
    const {text,status} = useSelector(state => state.textItem)
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchData({paraf:4 ,textType: 'html'}))
    }, [dispatch])

if(status=="loading") return <ContentSection style={{display:'flex',justifyContent:"center",alignItems:"center"}}><Spinner/></ContentSection>
return(
    <ContentSection>
        {text}
    </ContentSection>
)
}
export default Content