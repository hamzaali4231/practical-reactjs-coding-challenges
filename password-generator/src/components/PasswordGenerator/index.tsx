import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {  useState, useTransition } from 'react'

import passwordGif from '../../assets/gif/password.gif'
import { ReactComponent as Copy } from '../../assets/icons/copy.svg'
import { ReactComponent as Refresh } from '../../assets/icons/refresh.svg'
import Checkbox from '../Checkbox'
import './index.css'

const checkboxList = [

  {
    id:0,
    label:"upperCase",
    name: "upper",
    checked:false

  },
  {
    id:1,
    label:"lowerCase",
    name: "lower",
    checked:false

  },
  {
    id:2,
    label:"numbercase",
    name: "number",
    checked:false

  },
  {
    id:3,
    label:"specialCase",
    name: "symbols",
    checked:false

  }
]



const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8)
  const [password, setPassword] =  useState<string>('')

const upperCaseSelect = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseSelect = 'abcdefghijklmnopqrstuvwxyz'
const numCaseSelect = '0123456789'
const specCaseSelect = '!@#$%^&*()'
const [data, setData] = useState( checkboxList)

  const onChangePasswordLength = (value: number | number[]) => {
    setPasswordLength(value as number)
  }


  const copyPass = () => {

    //map through the data array to check if 

      console.log(password)
  }

  const handleChange = (id:number) => {
    const updateCheckboxes = data.map((checkbox) => 
    checkbox.id === id ? {...checkbox, checked: !checkbox.checked}:checkbox)

    setData(updateCheckboxes)

  }

  const createPass = () => {
    let result = ''

    let selection : string[] = []

    let finalPass = ''
    data.map((item) =>
          item.checked === true ? selection.push(item.name): ''
    )


    for (let i=0; i<selection.length ; i++) {
        if(selection[i] ==='upper')
        result += upperCaseSelect

        if(selection[i] ==='lower')
        result += lowerCaseSelect

        if(selection[i] ==='number')
        result += numCaseSelect

        if(selection[i] ==='symbols')
        result += specCaseSelect

    }
    let tempPass = ''


    for ( let i = 0; i < passwordLength; i++ ) {
      tempPass += result.charAt(Math.floor(Math.random() * result.length));
   }    
   


setPassword(tempPass)
  }

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input type="text" placeholder="your password" value={password} />
          <Refresh onClick={createPass} />
        </div>
        <button onClick={copyPass} className="copy-btn">
          <Copy /> Copy
        </button>
      </div>
      <span className="fw-500">Weak</span>
      <div className="slider">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className="slider-style"
        />
      </div>
      <div  className="elements">
        {data.map((obj) => {

          return(
            <div key={obj.id}>
          <Checkbox
          multiple={true}
          id={obj.id}
          label = {obj.label}
          checked= {obj.checked}
          name= {obj.name}
          onChange = {() => handleChange(obj.id)}
          />
                    </div>

          )
        })}
        </div>
        </div>
  )
}

export default PasswordGenerator
