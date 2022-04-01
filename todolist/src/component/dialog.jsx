import React, { Component } from 'react'

export default class
    dialog extends Component {
    render() {
        const { change } = this.props
        return (
            <div style={{ position: 'absolute', height: '70%', width: '93%', top: '10%' }}>
                <textarea id='text' style={{ display: 'block', width: '90%', height: '90%', margin: '0 auto', marginBottom: '2%' }} cols="30" rows="10"></textarea>
                <button className="btn btn-default" style={{ display: 'block', margin: '0 auto' }} onClick={() => {
                    if (document.getElementById('text').value != '') {
                        change(document.getElementById('text').value)
                    }
                }}> change</button>
            </div>
        )
    }
}
