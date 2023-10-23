import { useEffect, useState } from "react";
import {SearchedShows} from '../';

export default function SearchForm(){
    const [inputValue,setInputValue]=useState("")
    const [langauge,setlangauge]=useState("")
    const [searchString,setSearchString] = useState("Arrow")
    const [showData,setShowData]= useState([])

    function handleInput(e){
        setInputValue(e.target.value)
    }

    function handleSumbit(e){
        e.preventDefault()
        setSearchString(inputValue);
        setInputValue("")
    }
    
    useEffect(() => {
        async function searchAPI(){
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
            const data = await response.json()
            //console.log(data)
            const showData = data.map(s => s.show)
            console.log(showData)
            setShowData(showData)
            
        }

        searchAPI()
    },[searchString])

    function handleLanguage(e) {
        setlangauge(e.target.value)
      }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <input type="text" required onChange={handleInput} value={inputValue}/>
                <input type="submit" value="Search" />
                <select onChange={handleLanguage}>
                    <option value="all">All</option>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                </select>

            </form>
            
            <SearchedShows showData={showData}/>
            
        </>
      );
}