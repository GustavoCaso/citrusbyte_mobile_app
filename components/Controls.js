import React from 'react'
import fetch from 'isomorphic-unfetch'
import Slider from './Slider'
import Button from './Button'
import List from './List'

export default class Controls extends React.Component {

  constructor(props){
    super(props);
    this.state = props;
  }

  onClick = async (id, type, name, value) => {
    const res = await fetch(
      `https://citrusbyte-admin.herokuapp.com/api/v1/devices/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ type, name, value })
      }
    )
    const data = await res.json()
    this.setState(data)
  }

  resolveComponent = (id, control, index) => {
    const ControlComponent = {
      slider: Slider,
      button: Button,
      select: List
    }
    const Component = ControlComponent[control.type]
    return (
      <div>
        <h2>{control.name}</h2>
        <Component key={index} onClick={(value) => this.onClick(id, control.type, control.name, value)} id={id} value={control.value} options={control.options}/>
      </div>
    )
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.data.map((control, index) => (
            this.resolveComponent(this.state.id, control, index)
          ))}
        </ul>
      </div>
    )
  }
}
