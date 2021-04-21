import { Link } from 'react-router-dom';

const WeeklyRoutine = ({onDays}) => {
//     const [days, setDays] = useState([])
//     const url = '/2%20days';

//     const fetchWeekly = async () => {
//         try {
//             const response = await fetch(url);
//             const days = await response.json();
//             console.log(days)
//             setDays(days);


//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         fetchWeekly();
//     }, [])

    // onClick = { fetchWeekly }

    return (
        <form>
            <h2>Number of Days</h2>
            <p>Please select your workout length</p>
            <Link to="/weeklyworkout" onClick={(e) => onDays('2')}>
                <button>
                    2 Days
                </button>
            </Link>
            <Link to="/weeklyworkout" onClick={(e) => onDays('3')}>
                <button>
                    3 Days
                </button>
            </Link>
            <Link to="/weeklyworkout" onClick={(e) => onDays('4')}>
                <button>
                    4 Days
                </button>
            </Link>
            <Link to="/weeklyworkout" onClick={(e) => onDays('6')}>
                <button>
                    6 Days
                </button>
            </Link>


        </form>
    )
}

export default WeeklyRoutine
