import './App.css';
import { useState } from 'react';

function App() {
const [filmes, setFilmes] = useState([]);
const [totalfilmes, setTotalFilmes] = useState(0)
const [totalPages, setTotalPages] = useState(0)
const [page, setPage] = useState(2)

const handBuscarMovies = ()=> {
  const chaveAPI = "203b5c5e";

  let url = "a";
  if (totalPages==0){
      url = "http://www.omdbapi.com/?apikey="+chaveAPI+"&s=rambo";
  }else if (page<=totalPages){
    url = "http://www.omdbapi.com/?apikey="+chaveAPI+"&s=rambo&page="+page;
    setPage(page+1);
    console.log(page);
    console.log(url);
  }
  
  fetch(url)
  .then(response => {
    return response.json();
  }).then(data => {
    setTotalFilmes(data.totalResults);
    setFilmes(filmes.concat(data.Search));

    if (data.totalResults%10 !==0){
      setTotalPages(Math.floor(data.totalResults/10)+1);
    }else{
      setTotalPages(Math.floor(data.totalResults/10));
    }
  })
}
  return (
    <div className="App">
      Movies
    <button onClick={handBuscarMovies}>
      Buscar
    </button>
    <br/>
    <label>Total Filmes: {totalfilmes}</label>
    <br/>
    <label>Total Pages: {totalPages}</label>
    {filmes.map((m) => <p>{m.Title}</p>)}
    </div>
  );
}

export default App;
