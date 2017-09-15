import Device from '../components/Device'
import Meta from '../components/Meta'

const Show = (props) => (
  <Meta>
    <div>
      <header>
        <p>{props.name}</p>
      </header>
      <Device data={props} />
      <style jsx>{`
        header {
          background: black;
          color: white;
          padding: 20px;
        }
        p{
          margin: 0;
        }
      `}</style>
    </div>
  </Meta>
)

Show.getInitialProps = async function (context) {
  const { data } = context.query

  console.log(`Navigate to Device: ${data}`)

  return JSON.parse(data)
}

export default Show
