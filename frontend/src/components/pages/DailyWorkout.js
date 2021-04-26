import "../../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DailyWorkout = ({ workout }) => {
  let history = useHistory();
  const muscles = history.location.state;

  return (
    <div>
      <h1 className="pageTitles">Daily Workout</h1>

      <ul className="containerList">
        {workout.map((exercise, index) => (
          <li className="listRemove" key={index}>
            {exercise}
          </li>
        ))}
      </ul>

      <Link className="linkRemove" to="/dailyweekly">
        <button className="btn">Create Another Workout</button>
      </Link>
    </div>
  );
};

export default DailyWorkout;
