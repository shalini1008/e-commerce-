import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../Context/data/MyContext'

function Home() {
    const context = useContext(MyContext);
    console.log(context)
  return (
    <Layout>
        
    </Layout>
  )
}

export default Home