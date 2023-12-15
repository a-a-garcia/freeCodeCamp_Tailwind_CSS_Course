import './App.css'
import React, {useState} from 'react'
import { ArrowDown } from './arrowDown'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState('Option 1')

  const updateValue = (value) => {
    setSelectValue(value)
    setIsOpen(false)
  }

  return (
    <>
      <div>
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <p className='text-base'>Paragraph</p>
        <a href="https://freecodecamp.com">Anchor</a>
        <div className='my-4'>
          <button className='btn btn-primary'>Button</button>
        </div>
        <div className='my-4'>
          <button className='btn btn-secondary'>Button</button>
        </div>
        <div className='my-4'>
          <button disabled className='btn btn-primary'>Disabled Button</button>
        </div>
        <div>
          <input type="text" placeholder='E-mail' />
        </div>
        <div>
          <input disabled type="text" />
        </div>
        <div>
          <input type="date" />
        </div>
        <div className='flex items-start mb-4'>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, praesentium delectus? Quas veniam facere rem quod veritatis similique sequi voluptatum?</label>
        </div>
        <div>
          <select name="" id="">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
      </div>
      <div className="Select">
        <div className="flex items-center justify-between child" onClick={() => {setIsOpen(!isOpen)}}>
          <span>{selectValue}</span>
          <div className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}>
            <ArrowDown />
          </div>
        </div>
        {isOpen &&
        <div>
          <ul className="flex flex-col divide-y border-t">
            <li className='child' onClick={()=> updateValue("Option 1")}>Option 1</li>
            <li className='child' onClick={()=> updateValue("Option 2")}>Option 2</li>
            <li className='child' onClick={()=> updateValue("Option 3")}>Option 3</li>
          </ul>
        </div>
        }
      </div>
    </>
  )
}

export default App
