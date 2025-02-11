import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()

    return(<div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md ">
          {/* Header */}
          <Header name={data.state.user}/>
  
          {/* Card */}
          <div className="flex  justify-between gap-7 my-5 flex-wrap">
  
            <Card bgcolor={"#8272DA"} title={"23"} subtitle= {"Krishnagiri"}/>
            <Card bgcolor={"#FD6663"} title={"February "} subtitle= {"2025"}/>
            <Card bgcolor={"#FCA201"} title={"Built Using "} subtitle= {"React"}/>
     
            </div>
          {/* TodoContainer */}
            <TodoContainer />
  
        
      
  
          </div>
        </div>
      )
}
export default Landing