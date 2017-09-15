import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = ({ devices }) =>
  <div>
    <h1>Devices</h1>
    <ul>
      { devices.map((device) => (
        <li key={device.id}>
          <Link as={`/s/${device.id}`} href={`/show?data=${JSON.stringify(device)}`}>
            <a>{device.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>

Index.getInitialProps = async () => {
  const res = await fetch('https://citrusbyte-admin.herokuapp.com/api/v1/devices')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    devices: data
  }
}

export default Index
