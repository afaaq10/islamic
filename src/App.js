
import './App.css';
import { useState } from 'react';
function App() {

  const [bt, setbt] = useState(false);



  // const click = () => {

  //   if (!bt) {
  //     setbt(true)
  //     alert('completed first two')

  //   }

  // }
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


  return (
    <>

      <div className="container">



        <div className="first">





          <table class="table">
            <thead>
              <tr>
                <th scope="col">Surah no.</th>
                <th scope="col">Name</th>
                <th scope="col">Checks</th>
                <th scope="col">Remainder</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Alam-tara</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check} type="checkbox" value="" id="flexCheckDefault1" />
                  <label class="form-check-label" for="flexCheckDefault">

                  </label>


                </div></td>
                <td id="text" style={{ display: "none", color: "blue" }}>completed</td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Li-laafi</td>
                <td>        <div class="form-check">
                  <input class="form-check-input" onClick={check2} type="checkbox" value="" id="flexCheckDefault2" />
                  <label class="form-check-label" for="flexCheckDefault2">

                  </label>


                </div></td>
                <td id="text2" style={{ display: "none", color: "blue" }}>completed</td>

              </tr>

            </tbody>
          </table>



          {/* <button type="button" onClick={click} class="btn btn-primary p-1">First two</button> */}
        </div>


      </div>


    </>

  );
}

export default App;
