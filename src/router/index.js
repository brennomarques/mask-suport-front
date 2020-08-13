import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Menu-pages/Home'
import Certa1 from '../components/Pages/CertificadoA1'
import Certa3 from '../components/Pages/CertificadoA3'
import CertBirdId from '../components/Pages/CertificadoBirdId'
import Solicitation from '../components/Pages/Solicitation'
import TypeService from '../components/Pages/TypeService'
import Help from '../components/Pages/Help'
import Login from '../components/Login/Login'
import RecoverLogin from '../components/Login/RecoverLogin'
import CreateLogin from '../components/Login/CreateLogin'
import Admin from '../components/Pages/Admin/MenuAdmin'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Solicitation
  },
  {
    path: '/certificadoa1',
    component: Certa1
  },
  {
    path: '/certificadoa3',
    component: Certa3
  },
  {
    path: '/certificadobirdid',
    component: CertBirdId
  },
  {
    path: '/solicitarion',
    component: Solicitation
  },
  {
    path: '/typeservice',
    component: TypeService
  },
  {
    path: '/Help',
    component: Help
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/recoverlogin',
    component: RecoverLogin
  },
  {
    path: '/createlogin',
    component: CreateLogin
  },
  {
    path: '/adminitrador',
    component: Admin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
