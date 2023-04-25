import Image from 'next/image'
import styles from './page.module.css'
import Titlebar from '../components/Titlebar'
import SidebarL from '@/components/SidebarL'
import SidebarR from '@/components/SidebarR_INACTIVE'
import Maincontent from '@/components/Maincontent'

export default function Home() {
  return (
    <main>
      <Titlebar/>
      <div className={styles.container}>
        <SidebarL/>
        <Maincontent/>
        {/* Right Sidebar will be INACTIVE until further notice */}
        {/* <SidebarR/> */}
      </div>
      
    </main>
  )
}
