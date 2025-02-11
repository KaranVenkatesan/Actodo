import { useState } from "react"

function AddTodoForm(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setNewactivity] = useState("")

    const handleChange = (evet)=> 
    {
        setNewactivity (evet.target.value)
    }

    const addActivity = ()=>
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity([])
    }

    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div >
            <input value={newactivity} onChange={handleChange} type="text" className="border border-black rounded bg-transparent p-1 " placeholder="Next Activity?" />
            <button  onClick={addActivity} className="bg-black text-white border border-black  p-1" >Add</button>
        </div>

    </div>
    )
}
export default AddTodoForm