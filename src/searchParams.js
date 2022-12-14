import React, {useState,useEffect, useContext}  from "react";
import pet, {ANIMALS} from "@frontendmasters/pet"  
import Results from './Results'
import useDropdown from './useDropdown' 
import ThemeContext from "./ThemeContext";


const SearchParams = ()=>{
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([])
    const [pets, setPets] = useState([])
    const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
    const [themeHook] = useContext(ThemeContext)

    async function requestPets() {
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        })

        console.log("animals", animals);

        setPets(animals || [])
    }

    useEffect(()=>{
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then( ({breeds: apiBreeds})=>{
            const breedStrings = apiBreeds.map( ({name})=> name)
            setBreeds(breedStrings)
        }, console.error)
    }, [animal, setBreed, setBreeds]);


    return(
        <div className="search-params">
             
          <form onSubmit={ (e)=>{
            e.preventDefault()
            requestPets()
          } }> 

            <label htmlFor="location" >
                Location
                <input 
                    id="location" 
                    value={location} 
                    placeholder='location' 
                    onChange={e=> setLocation(e.target.value)}
                />
            </label>

            <AnimalDropdown />
            <BreedDropdown />

            <button style={{backgroundColor : themeHook}}> Submit </button>
          </form>
          <Results pets={pets} />
        </div>
    )
};

export default SearchParams;