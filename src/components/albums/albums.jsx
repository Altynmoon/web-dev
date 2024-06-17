import { useEffect, useState } from "react";
import "./albums.css";

const Albums = () => {
    
const [albums, setAlbums] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
const onDelete = () => {
console.log("i am here");
}
    return(
        <>{albums?.map((album) => (
        <div>
            <div className="div_block">{album.title}</div>
            <div>{album.userId}</div>
            <div>{album.id}</div>
            <div><button onClick={onDelete}>Delete</button></div>
            <div><button>Detail</button></div>
        </div>
        ))}</>
    )
}
export default Albums;
