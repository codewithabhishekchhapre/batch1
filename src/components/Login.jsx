import { useState } from "react"
import { Link } from "react-router-dom";

function Login() {

     const [data, setdata] = useState({});
     const [show, setshow] = useState(false)
     // const [name,setname]=useState("user")
     // const [pass,setpass]=useState("123")

     function getvalue(e) {
          var name = e.target.name;
          var value = e.target.value;

          setdata((predata) => ({ ...predata, [name]: value }))

          // if(e.target.name=="pass"){
          //      setpass(e.target.value)
          // }
          // else{

          //      setname(e.target.value)
          // }

     }

     function submited(e) {
          setshow(true)
          e.preventDefault()
          console.log(data)
     }

     return (
          <div>
               {/* <h1>username:{data.username}</h1>
               <h1>password:{data.pass}</h1>
               <h1>mobile:{data.mobile}</h1> */}
               <Link to={"/"}>return to home</Link>

               {
                    show ? (
                    <>
                         <h1>username:{data.username}</h1>
                         <h1>password:{data.pass}</h1>
                         <h1>mobile:{data.mobile}</h1>
                    </>) : (
                    <>
                              <h1>this is a function component</h1>
                              <p>It is a stateless component</p>
                              <form action="" onSubmit={submited}>
                                   <input type="text" name="username" className="border" placeholder="Enter your username" onChange={(e) => { getvalue(e) }} />
                                   <br />
                                   <input type="password" name="pass" className="border" placeholder="Enter your password" onChange={(e) => { getvalue(e) }} />
                                   <input type="tel" name="mobile" className="border" placeholder="Enter your password" onChange={(e) => { getvalue(e) }} />
                                   <br />
                                   <button type="submit">Submit</button>
                              </form>
                    </>
                    )
               }


          </div>

     )
}

export default Login;