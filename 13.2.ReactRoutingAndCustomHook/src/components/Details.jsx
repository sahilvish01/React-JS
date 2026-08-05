import {useParams} from "react-router"
import useFetch from "../customhooks/useFetch";

export default function Details()
{
    const {name} = useParams();

    const {data, err, isLoading} = useFetch(name ? `https://api.github.com/users/${name}` : null);

    if(!name) return(<h1>This is Details Page</h1>);

    return (
        <div style={{height:"400px", width:"250px", border:"2px solid black", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>

            {isLoading && <h1>Loading..</h1>}

            {!isLoading && err && <h1>{err}</h1>}

            {!isLoading && !err && <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <img style={{height:"350px", width:"225px", objectFit:"contain", margin:"auto"}} src={data.avatar_url} alt={data.login} />
                                        <h1>Name {data.login}</h1>
                                    </div>}
        </div>
    )
}