import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Meta from '../components/Meta'

const Index = ({ devices }) =>
  <Meta>
    <header>
      <p>Devices</p>
    </header>

    <ul className="l-list">
      { devices.map((device) => (
        <li key={device.id} className='l-item'>
          <Link as={`/s/${device.id}`} href={`/show?data=${JSON.stringify(device)}`}>
            <a className="o-flex">
              <span className="o-flex-1">{device.name}</span>
              <img className="s-image" src="/static/right_caret.png" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      header {
        text-align: center;
        padding: 10px;
        background: #fff
        margin-bottom: 5px;
      }
      ul{
        margin: 0;
        padding: 0;
      }
      .s-image{
        width: 20px;
        height: 20px;
      }
      .o-flex{
        display: flex;
        align-items: center;
      }
      .o-flex-1{
        flex: 1;
      }
      .l-list{
        list-style-type: none;
      }
      .l-item{
        background: #fff
        border-bottom-color: #f7f7f7;
      }
      li:not(:last-child){
        margin-bottom: 2px
      }
      a{
        display: block;
        padding: 10px;
        text-decoration: none;
        color: #333
      }
    `}</style>
  </Meta>

Index.getInitialProps = async () => {
  const res = await fetch('https://citrusbyte-admin.herokuapp.com/api/v1/devices')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    devices: data
  }
}

export default Index
