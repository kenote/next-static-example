import * as React from 'react'
import * as Layout from '~/layouts'
import { Button } from 'antd'

const Home = () => (
  <Layout.HomePage>
    <h1>Home page 🚀</h1>
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  </Layout.HomePage>
)

export default Home