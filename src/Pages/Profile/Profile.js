
import React from 'react'
import Style from './Home.module.css'

 
import LeftSection from '../../Section/LeftSection/LeftSection'
import MidSection from '../../Section/MidSection/MidSection'
import RightSection from '../../Section/RightSection/RightSection'

function Profile() {
 
  return (
    <div className={Style.homeDiv}>
      <div className={Style.leftDiv}><LeftSection/></div>
      
      <div className={Style.rightDiv}><RightSection /></div>
    </div>
  )
}

export default Profile