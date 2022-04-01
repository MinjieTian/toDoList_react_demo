import React, { Component } from 'react'

export default class createTask extends Component {
    render() {
        const{c} = this.props
        return (
            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)',zIndex:'999',display:'flex'
                ,flexDirection:'column',justifyContent:'center',alignItems:'center'
            }}>
                <div style={{width:'800px',height:'600px',backgroundColor:'#fff',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <label >Title</label><input type="text" id='titleInput' style={{marginBottom:'100px'}}/>
                
                    <label >description</label><textarea name="" id="desTextArea" cols="30" rows="10" style={{width:'500px'}}></textarea>
                </div>
                <button className="btn btn-default" onClick={() => {
                    if(document.getElementById('titleInput').value != '' && document.getElementById('desTextArea').value != ''){
                        let o = {
                            title:document.getElementById('titleInput').value, 
                            description:document.getElementById('desTextArea').value
                        }
                        c(o)
                    }else{
                        c('')
                    }
                    
                }}>Create Task</button>
            </div>
        )
    }
}
