import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null); //Stockage de la data récupéré
    const [error, setError] = useState(null); //Stockage d'erreur eventuelle
    const [loading, setLoading] = useState(true); //Gere l'etat de chargement

    //Useffect afin d'effectuer le fetch au montage du composant
    useEffect(() => {
        //Fonction auto-exécuté asynchrone pour le fetch 
        (async () => {
            try {
                const resp = await fetch(url)
                if (!resp.ok) {
                    throw new Error(`Erreur lors du fetch : ${resp.status}`);
                }
                setData(await resp.json());//Update de data avec le json recupéré
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        })()
    }, [url]) // Ajout d'une dépendance a "url" pour relancer le fetch si l'url change

    //Le hook retourne un objet avec 3 useState
    return { data, error, loading }
}
