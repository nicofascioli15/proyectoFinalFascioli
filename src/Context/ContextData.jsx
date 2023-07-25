import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const dataContext = React.createContext()


export const useDataContext = () => {
    return useContext(dataContext)
}

const ContextData = ({children}) => {

    const [articulos, setArticulos] = useState([]);
    const todosLosArticulos = collection(db, "articulos");

    
        useEffect(() => {
            const obtenerLista = async () => {
                const data = await getDocs(todosLosArticulos);

                const articulosBaseDeDatos = data.docs.map((articulo) => ({
                    ...articulo.data(),
                    id: articulo.id,
                }));
                setArticulos(articulosBaseDeDatos);
            };

            obtenerLista();
        }, []);



    return (

        <dataContext.Provider value={articulos}>
            {children}
        </dataContext.Provider>

    )
}

export default ContextData