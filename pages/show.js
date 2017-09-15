import fetch from 'isomorphic-unfetch'
import Controls from '../components/Controls'
import Link from 'next/link'
import Meta from '../components/Meta'

const Show = (props) => (
  <Meta>
    <div>
      <header className="o-flex">
        <Link href='/index'>
          <img className="s-image" src="/static/left_caret.png" />
        </Link>
        <p className="o-flex-1 u-text-center">{props.name}</p>
      </header>
      <Controls {...props} />
      <style jsx>{`
        .o-flex{
          display: flex;
        }
        .o-flex-1{
          flex: 1;
        }
        .u-text-center{
          text-align: center;
        }
        .s-image{
          width: 20px;
          height: 20px;
        }
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
  const { id } = context.query
  const res = await fetch(`https://citrusbyte-admin.herokuapp.com/api/v1/devices/${id}`)
  const data = await res.json()

  return data
}

export default Show
