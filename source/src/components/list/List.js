import React, { Component } from 'react'
import './List.css'
import Alert from '../alert/Alert'

export default class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedUsers: [],
            showAlert: false
        }
    }

    toggleUser(id) {
        let selectedUsers = [...this.state.selectedUsers]
        if(selectedUsers.indexOf(id) !== -1) {
            selectedUsers.splice(selectedUsers.indexOf(id), 1)
        }
        else {
            selectedUsers.push(id)
        }
        this.setState({selectedUsers})
    }

    remove() {
        this.setState({selectedUsers: []})
        this.props.setDefault()
    }

    update() {
        this.setState({showAlert: true})
        setTimeout(() => {
            this.setState({showAlert: false})
        }, 2000);
        this.remove()
    }


    render() {
        let { users } = this.props
        return(
            <>
                <div className = "flex-box list-container">
                    {
                        users.map(item=> (
                            <div className = "card" key = {item.id} onClick = {() => {this.toggleUser(item.id)}}>
                                {
                                    this.state.selectedUsers.includes(item.id) &&
                                    <label className="checkbox-container">
                                        <input type="checkbox"checked = "checked" onChange = {() => {}} />
                                        <span className="checkmark"></span>
                                    </label>
                                }
                                <img className="user-image" src={item.Image} alt="" />
                                <div className = "user-name">{item.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button className = "button update-btn" onClick = {() => {this.update()}} 
                        disabled = { !this.state.selectedUsers.length || !this.props.name.length || !this.props.desc.length }>
                        Update
                    </button>
                    <button className = "button remove-btn" onClick = {() => {this.remove()}} 
                        disabled = { !this.state.selectedUsers.length }>
                        Remove
                    </button>
                </div>
                {   
                    this.state.showAlert &&
                    <Alert />
                }
            </>
        )
    }
}