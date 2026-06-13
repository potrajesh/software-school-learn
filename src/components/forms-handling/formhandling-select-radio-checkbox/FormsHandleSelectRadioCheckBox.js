import { useState } from "react";
export default function FormsHandleSelectRadioCheckBox() {
    const [courses, setCourses] = useState("");
    const [gender, setGender] = useState("");
    const [movies, setMovies] = useState([]);
    const [bahubali, setBahubali] = useState(false);
    const [sitaramam, setSitaramam] = useState(false);

    function handleGender(e) {
        console.log("handleGender=>" + e.target.checked)
        setGender(e.target.value);
    }
    function handleCourses(e) {
        console.log("handleCourses=>" + e.target.value)

        setCourses(e.target.value);
    }

    function handleBahubali(e) {
        console.log("handleMovies=>" + e.target.checked)
        setBahubali(e.target.checked);
    }
    function handleSetaramam(e) {
        console.log("handleMovies=>" + e.target.checked)
        setSitaramam(e.target.checked);
    }

    return (
        <div className="container">
            <div>
                <div>
                    <select className="form-select" onChange={event => handleCourses(event)}>
                        <label>courses</label>
                        <option>java</option>
                        <option>dbmc</option>
                        <option>c++</option>
                        <option>os</option>
                    </select>
                </div>
                <div className="form-check" onChange={event => handleGender(event)}>
                    <label>Gender</label>
                    <input type="radio" name="gender" value="male" />Male
                    <input type="radio" name="gender" value="female" />FeMale
                </div>
                <div className="form-check">
                    <label>Movies</label>
                    <div><input type="checkbox" name="movies" value="bahubali" onChange={event => handleBahubali(event)} /> bahubali</div>
                    <div><input type="checkbox" name="movies" value="sitaramam" onChange={event => handleSetaramam(event)} /> sitaramam</div>
                </div>
            </div>
            <div>
                <button className="text-primary">signup</button>
            </div>
            {courses}
            {gender}
            <div>Bahubali: {String(bahubali)}</div>
            <div>Sitaramam: {String(sitaramam)}</div>


        </div>
    );
}