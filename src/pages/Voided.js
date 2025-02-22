import React, {useState, useEffect} from 'react'
import Logo from "../images/techedge.png"
import VoidedImage from "../images/Voided.png"
import { useLocation } from 'react-router-dom'

function Voided() {
    let location=useLocation()
    let [doctitle,setDocTitle]=useState('')
    let [docmsg,setDocMsg]=useState('')

    const logostyle = {
      width:"80px"
    }
    const logostyle1 = {
        width:"300px"
    }

    useEffect(()=>{
        try {
            setDocTitle(location.state.doctitle)
            setDocMsg(location.state.msg)
        }
          catch(err) {  
        }
    }, [])

    return (
    <>   

        <div className='App' >
            <div className='row'>
                
                <div className='col-md-9 col-lg-6 col-xl-4'></div>
                <div className='col-md-9 col-lg-6 col-xl-4 text-center'>
    
                <br/>
                        <div className='card text-dark bg-white text-white mt-5' style={{borderRadius:'0',borderTop:'none',boxShadow:'0'}}>
                        <img src={Logo} className="img-fluid mt-5 mb-2" alt="logo" style={logostyle1}/>
                        
                        <div className='p-5 text-dark bg-primary text-white mt-4'>
                    
                            <p >{doctitle}</p>
                            <hr/>
                            <img src={VoidedImage} className="img-fluid mb-3" alt="logo" style={logostyle} />
                            <p>{docmsg}</p>
                        </div>
                            
                        </div>
                </div>
                <div className='col-md-9 col-lg-6 col-xl-4'></div>
            
        </div>
         </div>

       

     
    </>

  )
}

export default Voided