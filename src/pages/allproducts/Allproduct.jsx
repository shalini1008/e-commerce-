import React, { useContext } from 'react'
import MyContext from '../../Context/data/MyContext'
import Layout from '../../components/Layout/Layout'
import HeroforAllproduct from './HeroforAllproduct'
import Filter from '../../components/filter/Filter'

function Allproduct() {
    return (
      <Layout>
        <HeroforAllproduct/>
      </Layout>
    )
}


export default Allproduct