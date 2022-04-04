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



    return (
        <>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle mt-2 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Rak'at
  </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><button onClick={one} >1</button></li>
                    <li><button onClick={two}>2</button></li>
                    <li><button onClick={three}>3</button></li>
                    <li><button onClick={four}>4</button></li>
                    <li><button onClick={five}>5</button></li>

                </ul>


            </div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <p style={{ color: "blue" }}>Surah: {dr}</p>
                    <div class="carousel-item active ">
                        <img src="https://media.istockphoto.com/photos/ramadan-kareem-lantern-and-dates-fruit-with-city-light-background-picture-id1305026622?b=1&k=20&m=1305026622&s=170667a&w=0&h=EEqBsXLytjJGv5oQaxnGB19SnFhgj-c7z30FLgmwZiQ=" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item ">
                        <img src="https://media.istockphoto.com/vectors/ramadan-kareem-with-golden-ornate-crescent-and-islamic-line-mosque-vector-id1141484214?k=20&m=1141484214&s=612x612&w=0&h=ejf5U9Gu46Jswm2USWlufTd5HoY10A_HSAUogE8zgoc=" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item ">
                        <img src="https://c0.wallpaperflare.com/preview/1019/493/70/ramadan-ramadhan-night-religious.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Profile
