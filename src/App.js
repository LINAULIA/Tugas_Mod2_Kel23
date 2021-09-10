//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ul class="nav nav-pills">
      {/* <li class="nav-item dropdown"> 
    <a class="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pilih Angkatan</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Angkatan 2018</a></li>
      <li><a class="dropdown-item" href="#">Angkatan 2019</a></li>
      <li><a class="dropdown-item" href="#">Angkatan 2020</a></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
    */}

      <li class="nav-item">
     <a class="button-active text-right object-right " aria-current="page" href="#">Login</a>
      </li>
      <li class="nav-item-search">
      <input class="search text-black" type="text" placeholder="Cari data mahasiswa..." required/>
      <input class="button" type="button" value="Cari"></input>
      </li>  
</ul>
      </header>
    </div>
  );
}

export default App;
