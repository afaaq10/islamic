import React from 'react'
import { useState } from 'react';
function Profile() {

    const [dr, setdr] = useState("");

    const one = () => {

        setdr("alam-tara")

    }
    const two = () => {

        setdr("alam-nashra")

    }
    const three = () => {

        setdr("Arayatal-lazi")

    }
    const four = () => {

        setdr("Al-Kausar")

    }
    const five = () => {

        setdr("Al-kaafirun")

    }
    const six = () => {

        setdr("iza-jaa")

    }
    const seven = () => {

        setdr("Al-lahab")

    }
    const eight = () => {

        setdr("Al-ahad")

    }
    const nine = () => {

        setdr("Al-falak")

    }
    const ten = () => {

        setdr("Al-naas")

    }



    return (
        <>

            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col" >Rak'at</th>
                        <th scope="col" >Surah Name</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle p-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Rak'at
  </button>
                                <ul class="dropdown-menu p-2 " aria-labelledby="dropdownMenuButton1"
                                    style={{ "min-width": "1rem", "backgroundColor": "none" }}>
                                    <li style={{ "margin": "2px" }}><button onClick={one} >1</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={two}>2</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={three}>3</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={four}>4</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={five}>5</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={six}>6</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={seven}>7</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={eight}>8</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={nine}>9</button></li>
                                    <li style={{ "margin": "2px" }}><button onClick={ten}>10</button></li>

                                </ul>
                            </div>
                        </th>
                        <td style={{ color: "white", "font-weight": "bold" }}> {dr}</td>

                    </tr>

                </tbody>
            </table>



        </>
    )
}

export default Profile
