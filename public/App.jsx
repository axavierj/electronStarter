import React from 'react'
import NavBar from 'react-bootstrap/Navbar'

import MainForm from './components/Form'

const App = () => {
    return ( 
        <>
        <NavBar bg="primary" variant="dark">
            <NavBar.Brand href="#">App</NavBar.Brand>
        </NavBar>
        <div className="container">
            <main className="card m-1 p-2">
                <MainForm />
            </main>
        </div>
        </>
     )
}
 
export default App