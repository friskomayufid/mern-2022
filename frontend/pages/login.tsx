import { useState } from 'react'
import Head from 'next/head'
import { FaSignInAlt } from 'react-icons/fa'

import Header from '../components/Header'
import type { NextPage } from 'next'

const Register: NextPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container">
        <section className="heading">
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login and start set goals</p>
          <section className="form">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-block">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Register