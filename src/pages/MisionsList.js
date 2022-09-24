import { Link } from "react-router-dom";
import { useMissions } from "../hooks/useMissions";
import "./MisionsList.css"

export default function MissionsList() {


    const {error, loading, data} = useMissions();
    if (loading) return <div>loading...</div>;
    if (error) return <div>erorrr</div>
    console.log(data);

    return (
        <div className="MissionsList" >
             {data.missions.map((val) => {
                return(                  
                <div className="box"  key={val.id}>
                <Link to={`/${val.id}`} >
                
                <h2> {val.name} </h2>
                <h4>{val.website}</h4>
                </Link>
                </div>
                
                )
            })}
            
        </div>

        
        
    )
}
