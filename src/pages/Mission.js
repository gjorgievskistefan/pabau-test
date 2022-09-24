import React from 'react'
import { useParams } from 'react-router-dom';
import { useMission } from '../hooks/useMision';
import "./Mission.css"


export default function Mission() {

  const { id } = useParams();

  const { data, error, loading } = useMission(id);

  if (error) return <div>erorrrrrrrrrrrr</div>

  if (loading) return <div>loadinggggggg</div>

  return (
    <>
      <div className="Mission split">
        <h2>{data.mission.name}</h2>
        <p>{data.mission.description}</p>
      </div>
      <div className="Comment split">
        <textarea placeholder='Add a comment' cols='max-width'></textarea>
        <input type="submit" value="Submit"></input>
      </div>
    </>
  )
}
