import React, { useRef, useState } from 'react'
import Navbar from './Navbar';
import './homepage.css';
import { CaretLeftOutlined } from '@ant-design/icons';

function Homepage() {
    const imgprvRef = useRef()

    const [prevUrl, setPrevUrl] = useState("")


    const getPrev=(e)=>{
        // setPrevUrl(e.target.files[0])
        if(!imgprvRef.current.files[0]){
            return;
        }
        let img = URL.createObjectURL(imgprvRef.current.files[0])
        setPrevUrl(img)
    }

  

    return (
        <div className="homepage">
            <div className="homepage__nav">
                <Navbar/>
                </div>
                
            <div className="homepage__content">
            <div className="homepage__top">
            </div>
            <div className="homepage__body">
            <div className="homepage__video">
                    <h3><CaretLeftOutlined />Videos</h3>
                </div>
                <div className="homepage__upload">

                <input type="url" placeholder="Insert URL here" className="homepage__URL"/>
                <p>or</p>
               
                <button className="upload__btn"  onClick={()=>document.getElementById('getFile').click()}>{prevUrl?<img src={prevUrl} style={{objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}}/>:'UPLOAD'}
                </button>
                <input type='file' ref={imgprvRef} onChange={getPrev}  id="getFile" style={{display: 'none'}} />
                </div>

            </div>
            </div>
          
        </div>
    )
}

export default Homepage ;
