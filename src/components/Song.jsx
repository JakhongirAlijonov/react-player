import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay , faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Song= ()=>{
    return (
        <div className="player">
            <h1>Player</h1>
            <div className="time-control">
                <p>Start time</p>
            <input type='range' />
            <p > End time</p>
            </div>
            <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size='2x' />
        <FontAwesomeIcon className="play" size='2x' icon={faPlay}/>
        <FontAwesomeIcon size='2x' className="skip-forward" icon={faAngleRight}/>
            </div>
        </div>
    )
}


export default Song
