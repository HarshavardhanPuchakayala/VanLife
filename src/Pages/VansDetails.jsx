import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Vans(){
    const params = useParams()
    const [van, setVan] = useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return(
        <div>
            {van ? (
        <div className="Vans-Van">
            <p className="UnderLine">&larr; Back to all Vans</p>
            <img src={van.imageUrl} className="vans-img"/>
            <p className="btn van-type ${van.type} selected">{van.type}</p>
            <h1>{van.name}</h1>
            <p className="price">${van.price}<span>/day</span></p>
            <p className="Vans-Text">{van.description}</p>
            <button>Rent this van</button>
        </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}