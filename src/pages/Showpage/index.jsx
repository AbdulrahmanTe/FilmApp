import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ShowCard } from '../../components'
// useParams - dynamic parameters of the route

export default function ShowPage() {
  const [show,setShow] =useState({image:{},rating:{}})
  const {id} = useParams()

  useEffect(() => {
    async function displayShows(){
      const response = await fetch (`https://api.tvmaze.com/shows/${id}`)
      const data =await response.json()
      console.log(data)
      setShow(data)
    }

    displayShows()

  },[])

  return (
    <>
        <ShowCard show={show}/>
    </>
  )
}
