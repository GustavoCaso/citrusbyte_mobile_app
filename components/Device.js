import Slider from './Slider'
import Button from './Button'
import List from './List'

const Device = (props) => {

  const controlComponent = {
    slider: Slider,
    button: Button,
    select: List
  }

  return (
    <div>
      <ul>
        {props.data.data.map((control) => (
          controlComponent[control.type]
        ))}
      </ul>
    </div>
  )
}

export default Device
