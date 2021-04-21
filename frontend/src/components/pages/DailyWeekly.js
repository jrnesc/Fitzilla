import { Link } from 'react-router-dom';

const DailyWeekly = ({onDuration, fetchWorkout}) => {

    return (
        <div>
            <Link to="/dailyroutine" onClick={(e) => onDuration('daily')}>
            <button>
                Daily Routine
            </button>
            </Link>
            <Link to="/weeklyroutine" onClick={(e) => onDuration('weekly')}>
            <button>
                Weekly Routine
            </button>
            </Link>
        </div>
    )
}

export default DailyWeekly
