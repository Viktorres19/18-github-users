import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cq8fp6p3geqtc32j.us.auth0.com"
      clientId="zBEvyk0uZ9iIIqybqbkQj7jIaD7lEE6N"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
