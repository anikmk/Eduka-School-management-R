import React from 'react'
import DetailsBanner from '../../DetailsBanner/DetailsBanner'
import howToAppy_banner_img from "../../../../assets/img/breadcrumb/01.jpg"
export default function HowToApply() {
  return (
    <div className='py-24'>
        <DetailsBanner image={howToAppy_banner_img} title={"How To Apply"}/>
    </div>
  )
}
