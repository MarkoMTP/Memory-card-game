import { useEffect, useState } from "react";
import "../styles/card.css"
  
 export default function Card({id, onClick}) {
    
    const [data, setData] = useState();
    
  
    useEffect(() => {
      let ignore = false;
      const fetchData = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const json = await response.json();
          if (!ignore) {
            setData(json);
          }
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
  
      return () => {
        ignore = true;
      };
    }, [id]);


    return (
        <div className="Card" onClick={onClick}>
          {data ? (
            <>
              <img src={data.sprites.back_default} alt={data.name} />
              <p>{data.name}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }