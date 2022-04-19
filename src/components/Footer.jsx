import React from 'react'

export default function Footer({detail}) {
  return (
   <>
       <div className='footer'>
           <h3>{detail}</h3>
       </div>
   </>
  )
}

Footer.defaultProps = {
    detail: 'www.MINORcOMPANY.com',
}
