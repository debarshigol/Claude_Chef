import { useState } from "react"

export function HtmlForm(){

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [employment, setEmployment] = useState("none")

    // The form is valid only when every required field has a value.
    const isFormValid =
        userId.trim() !== "" &&
        password.trim() !== "" &&
        gender !== "" &&
        employment !== "none"

    function handleForm(formData){
        const id = formData.get("userId")
        const pass = formData.get("password")
        console.log(id, pass)
        // to print all the data getting from the Form
        console.log(Object.fromEntries(formData))
    }

    return (
        <div className="form-div">
    <h3>Sign up Form</h3>
    <form className="formHtml" action={handleForm}>
        <label htmlFor="userId">User Name</label>
        <input id="userId" type="text" name="userId"
            value={userId} onChange={(e) => setUserId(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password"
            value={password} onChange={(e) => setPassword(e.target.value)}/>
        <fieldset>
        <legend>Gender</legend>
            <input type="radio" name="gender" value={"male"}
                checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" value={"female"}
                checked={gender === "female"} onChange={(e) => setGender(e.target.value)}/>
            <label htmlFor="">Female</label>
            <input type="radio" name="gender" value={"others"}
                checked={gender === "others"} onChange={(e) => setGender(e.target.value)}/>
            <label htmlFor="">Others</label>
        </fieldset>

        <fieldset>
        <legend>Food Preference</legend>
            <input type="checkbox" name="veg" value={"veg"}/>
            <label htmlFor="">VEG</label>
            <input type="checkbox" name="non-veg" value={"non-veg"}/>
            <label htmlFor="">Non-Veg</label>
            <input type="checkbox" name="chainese" value={"chainese"}/>
            <label htmlFor="">Chainese</label>
        </fieldset>
        <label htmlFor="">What is your employment status</label>
        <select name="employemnt" id=""
            value={employment} onChange={(e) => setEmployment(e.target.value)}>
            <option value="none">--------Select--------</option>
            <option value="12 Pass">12 Pass</option>
            <option value="Graduate">Graduate</option>
            <option value="Post-Graduate">Post-Graduate</option>
            <option value="Phd">Phd</option>
            <option value="others">Others</option>
        </select>
        <button className="submit-btn" disabled={!isFormValid}>Submit</button>
    </form>
    </div>
    )
}
