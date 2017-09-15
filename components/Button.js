import Switch from 'react-toggle-switch'

const Button = (props) => {
  return(
    <div>
      <Switch onClick={() => props.onClick(!props.value)} on={props.value}/>
      <style jsx global>{`
        .switch {
            border: 1px solid #ccc;
            width: 50px;
            height: 26px;
            border-radius: 13px;
            cursor: pointer;
            display: inline-block
        }

        .switch-toggle {
            border: 1px solid #999;
            box-shadow: 1px 1px 1px #ccc;
            width: 25px;
            height: 24px;
            left: 0;
            border-radius: 12px;
            background: #fff;
            position: relative;
            transition: left .2s ease-in-out
        }

        .switch.on {
            background: green
        }

        .switch.on .switch-toggle {
            left: 23px
        }

        .switch.disabled {
            cursor: not-allowed
        }
      `}</style>
    </div>
  )
}

export default Button
