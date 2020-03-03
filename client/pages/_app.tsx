// Page Loading...
import * as React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import nextRouter from 'next/router'

nextRouter.events.on('routeChangeStart', url => {
  NProgress.start()
})
nextRouter.events.on('routeChangeComplete', NProgress.done)
nextRouter.events.on('routeChangeError', NProgress.done)

export default class MyApp extends App {
  render () {
    let { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}