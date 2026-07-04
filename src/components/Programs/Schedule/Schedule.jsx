import "./Schedule.css";

function Schedule() {

    const schedule = [
        {
            day: "Monday",
            morning: "Strength Training",
            afternoon: "HIIT",
            evening: "Yoga"
        },
        {
            day: "Tuesday",
            morning: "Muscle Building",
            afternoon: "Cardio",
            evening: "CrossFit"
        },
        {
            day: "Wednesday",
            morning: "Functional Training",
            afternoon: "Strength Training",
            evening: "Yoga"
        },
        {
            day: "Thursday",
            morning: "Cardio",
            afternoon: "Muscle Building",
            evening: "HIIT"
        },
        {
            day: "Friday",
            morning: "Strength Training",
            afternoon: "CrossFit",
            evening: "Yoga"
        },
        {
            day: "Saturday",
            morning: "Functional Training",
            afternoon: "Cardio",
            evening: "Open Gym"
        }
    ];
    return (
        <section className="schedule">
            <div className="section_heading">
                <span className="section_tag">
                    WEEKLY SCHEDULE
                </span>
                <h2>Training Schedule</h2>
                <p>
                    Plan your workouts with our weekly class schedule.
                    Morning, afternoon, and evening sessions are available
                    for every fitness level.
                </p>
            </div>
            <div className="schedule_table">
                <div className="table_header">
                    <div>Day</div>
                    <div>Morning</div>
                    <div>Afternoon</div>
                    <div>Evening</div>
                </div>
                {schedule.map((item) => (
                    <div
                        className="table_row"
                        key={item.day}
                    >
                        <div>{item.day}</div>
                        <div>{item.morning}</div>
                        <div>{item.afternoon}</div>
                        <div>{item.evening}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Schedule;