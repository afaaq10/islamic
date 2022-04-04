import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Profile from './Profile.js';
import { useState, useEffect } from 'react';
function App() {





















  const [bt, setbt] = useState(false);


  useEffect(() => {
    alert('Welcome Imam Sahab! Click on the OK button')
  }, []);


  function check() {
    var checkBox = document.getElementById("flexCheckDefault1");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check2() {
    var checkBox = document.getElementById("flexCheckDefault2");
    var text = document.getElementById("text2");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check3() {
    var checkBox = document.getElementById("flexCheckDefault3");
    var text = document.getElementById("text3");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check4() {
    var checkBox = document.getElementById("flexCheckDefault4");
    var text = document.getElementById("text4");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check5() {
    var checkBox = document.getElementById("flexCheckDefault5");
    var text = document.getElementById("text5");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check6() {
    var checkBox = document.getElementById("flexCheckDefault6");
    var text = document.getElementById("text6");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check7() {
    var checkBox = document.getElementById("flexCheckDefault7");
    var text = document.getElementById("text7");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check8() {
    var checkBox = document.getElementById("flexCheckDefault8");
    var text = document.getElementById("text8");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function check9() {
    var checkBox = document.getElementById("flexCheckDefault9");
    var text = document.getElementById("text9");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function check10() {
    var checkBox = document.getElementById("flexCheckDefault10");
    var text = document.getElementById("text10");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }


  return (
    <>


      <div className="container">



        <div className="first">





          <table class="table" >
            <thead >
              <tr>
                <th scope="col">Surah no.</th>
                <th scope="col">Name of surah</th>
                <th scope="col">Checks</th>
                <th scope="col">Remainder</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>alam-tara</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" type="checkbox" onClick={check} value="" id="flexCheckDefault1" />
                  <label class="form-check-label" for="flexCheckDefault1">

                  </label>


                </div></td>
                <td id="text" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>li-laafi</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check2} type="checkbox" value="" id="flexCheckDefault2" />
                  <label class="form-check-label" for="flexCheckDefault2">

                  </label>


                </div></td>
                <td id="text2" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">3</th>
                <td>arayat-al</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check3} type="checkbox" value="" id="flexCheckDefault3" />
                  <label class="form-check-label" for="flexCheckDefault3">

                  </label>


                </div></td>
                <td id="text3" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">4</th>
                <td>inna-atayna</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check4} type="checkbox" value="" id="flexCheckDefault4" />
                  <label class="form-check-label" for="flexCheckDefault4">

                  </label>


                </div></td>
                <td id="text4" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">5</th>
                <td>kaafirun</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check5} type="checkbox" value="" id="flexCheckDefault5" />
                  <label class="form-check-label" for="flexCheckDefault5">

                  </label>


                </div></td>
                <td id="text5" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">6</th>
                <td>iza-jaa</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check6} type="checkbox" value="" id="flexCheckDefault6" />
                  <label class="form-check-label" for="flexCheckDefault6">

                  </label>


                </div></td>
                <td id="text6" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">7</th>
                <td>lahab</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check7} type="checkbox" value="" id="flexCheckDefault7" />
                  <label class="form-check-label" for="flexCheckDefault7">

                  </label>


                </div></td>
                <td id="text7" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">8</th>
                <td>ahad</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check8} type="checkbox" value="" id="flexCheckDefault8" />
                  <label class="form-check-label" for="flexCheckDefault8">

                  </label>


                </div></td>
                <td id="text8" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">9</th>
                <td>al-naas</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check9} type="checkbox" value="" id="flexCheckDefault9" />
                  <label class="form-check-label" for="flexCheckDefault9">

                  </label>


                </div></td>
                <td id="text9" style={{ display: "none", color: "white" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">10</th>
                <td>al-feeel</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check10} type="checkbox" value="" id="flexCheckDefault10" />
                  <label class="form-check-label" for="flexCheckDefault10">

                  </label>


                </div></td>
                <td id="text10" style={{ display: "none", color: "blue" }}>completed</td>

              </tr>







            </tbody>
          </table>
          <Link to="/Profile">See the Rak'at and corresponding Surah</Link>


          {/* <button type="button" onClick={click} class="btn btn-primary p-1">First two</button> */}
        </div>


      </div>



    </>

  );
}

export default App;
