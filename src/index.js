import React, {useState} from 'react'
import './styles.css'
import {createRoot} from 'react-dom/client'
// import {Router} from '@reach/router' 
import SearchParams from './searchParams'
import ThemeContext from './ThemeContext'



const App = () => {
    // return React.createElement(
    //     'div',
    //     {},
    //     [ React.createElement( 'h1', {}, 'Adopt Me!'),
    //       React.createElement(Pet, {
    //         name: "Lucy", 
    //         animal: 'Dog', 
    //         color: 'Blue'
    //     }),
    //       React.createElement(Pet, {
    //         name: "Bingo", 
    //         animal: 'Dog', 
    //         color: 'White'
    //     })

    // ])

    const themeHook = useState('darkblue')

    return(
      <React.StrictMode>
        < ThemeContext.Provider value={themeHook}>
        <div>
            <h1>Adopt Me!!</h1>,
            <SearchParams />
        </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    )
} 

const container = document.getElementById('root')
const root = createRoot(container)
root.render( <App />);

// render(
//     <App />,document.getElementById('root')
// )