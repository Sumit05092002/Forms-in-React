import React,{useState} from 'react'
export default function App() {
  const[formData,setFormData]=useState({FirstName:"",LastName:"",Email:"",TextArea:"",isVisible:true,mode:"",myFavCar:""})
  const changeHandler=(event)=>{
    const{name,value,checked,type}=event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,[name]:type==="checkbox"?checked:value
      }
    }
    )
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="form" onSubmit={submitHandler}>
      <form action="">
        FirstName:<input type="text"
        onChange={changeHandler}
        name='FirstName' />
        <br />
        <br />
        LastName: <input type="text"
        onChange={changeHandler}
        name="LastName" />
        <br />
        <br />
        Email: <input type="email" name="Email" id=""
        onChange={changeHandler} />
        <br />
        <br />
        <textarea name="TextArea" id="" cols="30" rows="10" placeholder='Enter Your Comments Here'
        onChange={changeHandler}></textarea>
        <br />
        <br />
        <input type="checkbox" name="isVisible" id="isVisible"
        onChange={changeHandler}
        checked={formData.isVisible}/>
        <label htmlFor="isVisible">Are you Online?</label>
        <br />
        <br />
        <input type="radio" name="mode" id="online-mode" onChange={changeHandler} value="online-mode"
        checked={formData.mode==="online-mode"}/>
        <label htmlFor="online-mode">Are you Online?</label>
        <input type="radio" name="mode" id="offline-mode" onChange={changeHandler} value="offline-mode" checked={formData.mode==="offline-mode"} />
        <label htmlFor="offline-mode">Are you Offline?</label>
        <br />
        <br />
        <label htmlFor="myFavCar">Select your Favourite Car?</label>
        <select name="myFavCar" id="myFavCar" onChange={changeHandler}>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="HondaCity">HondaCity</option>
          <option value="Mercedes">Mercedes</option>
          <option value="BMW">BMW</option>
        </select>
        <br />
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}
