import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate =  useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users


    function checkUser() {
        console.log(users)
        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}} )


            }

        })
        if(userfound ===false)
        {
            console.log("Login Failed")
            setRuser(false)
        }

    }

    function handleUInput(evt) {
        setEusername(evt.target.value)

    }

    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }


    return (<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi!</h1>
            {ruser ? <p>I Help you manage you activities after you login :) </p> : <p className="text-red-500">Please Sign Up Before You Login </p>}


            <div className="flex flex-col gap-2 my-2">
                <input
                    type="text"
                    className="w-52 border  border-black p-1 bg-transparent rounded-md"
                    placeholder="username" onChange={handleUInput} />

                <input
                    type="text"
                    className="w-52 border  border-black p-1 bg-transparent rounded-md"
                    placeholder="password" onChange={handlePInput} />


                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
                    Login
                </button>
                <p> Already have an account? <Link to={"/signup"} className="underline">SignUp</Link>  </p>




            </div>

        </div>
    </div>)
}

export default Login