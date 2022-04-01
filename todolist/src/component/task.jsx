import React, { Component } from 'react'
import Dialog from './dialog';

export default class task extends Component {
    state = {
        des:'',
        flag:true
    }

    sonChange = (des)=>{
        this.setState({
            des,
            flag:!this.state.flag
        })
    }
    render() {
        let color;
        const {title, description,myIndex,del} = this.props;
        const {des,flag} = this.state;
        switch(myIndex){
            case 0: {
                color = 'lightblue' 
                break
            }
            case 1:{
                color = 'orange'
                break
            } 
            case 2:{
                color = 'lightgreen'
                break
            } 
            case 3:{
                color = 'lightpink'
                break
            } 
            case 7:{
                color = 'lightblue'
                break
            } 
            case 6:{
                color = 'orange'
                break
            } 
            case 5:{
                color = 'lightgreen'
                break
            } 
            case 4:{
                color = 'lightpink'
                break
            } 
        }
            
        return (
            <div className='TaskPin col-sm-6 col-md-3' style={{position:'relative'}}>
                {flag?'':<Dialog change = {this.sonChange}/>}
                <div>
                    <div className='TaskBar' style={{ width: '100%', backgroundColor: color, height: '10px',borderRadius:'5px/5px' }}></div>
                    <br />
                    <div style={{ width: '100%',padding:'0 3%' ,height:'70%'}}>
                        <span style={{ fontSize: '20px', backgroundColor: color }} className='badge rounded-pill'>{title}</span>
                        
                        <div className='des' style={{marginTop:'2%'}}>{des == ''? description:des}</div>
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end',color:color}}>
                        <button className='pinBtn' onClick={()=>{this.setState({flag:!flag})}}><i className="bi bi-pencil-square"></i></button>
                        <button className='pinBtn' onClick={()=>{
                            del(myIndex)
                        }}><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
