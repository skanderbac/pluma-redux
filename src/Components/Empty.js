// there render while there is no  model choosed
// depends on thiere new home u cna malke changes here and everything will works fine

import React from 'react'

function Empty() {
    return (
        <div style={{height:'80vh',padding:'20px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <section style={{background:'white',height:'50%',width:'100%',textAlign:'center',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <h1 style={{color:'#d9d9d9'}}>Select an option first 🤗!</h1>
            </section>
        </div>
    )
}

export default Empty
