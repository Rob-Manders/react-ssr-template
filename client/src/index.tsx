import './scss/index.scss'
import { hydrateRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

const title = 'React Typescript Template'
document.title = title

hydrateRoot(document.getElementById('root'), <App />)
