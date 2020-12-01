import './Group.css';
import React, { Component } from 'react'
import UserIcon from '../../assets/user-icon.png'
import getUsers from '../../network/api/users'
import List from '../list/List' 

export default class Group extends Component {

    state = {
        users: [],
        name: '',
        desc: ''
    }

    componentDidMount() {
        getUsers().then(users => {
            this.setState({users})
        })
    }

    setName = (text) => {
        this.setState({name: text})
    }

    setDesc = (text) => {
        this.setState({desc: text})
    }

    setToDefault = () => {
        this.setName('')
        this.setDesc('')
    }

    render() {
        return (
            <div className="flex-box container">
                <div className="header">Create Group</div>
                <div className="flex-box form-container">
                    <img className="group-logo" src={UserIcon} alt="" />
                    <form className = "form">
                        <div>
                            <label className = "label">Name</label>
                            <input type="text" placeholder="group name" value = {this.state.name} onChange = {(e) => {this.setName(e.target.value)}} />
                        </div>

                        <div style = {{marginTop: "20px"}}>
                            <label className = "label">Description</label>
                            <input type="text" placeholder="group description" value = {this.state.desc} onChange = {(e) => {this.setDesc(e.target.value)}} />
                        </div>
                    </form>
                </div>
                <List users = {this.state.users} name = {this.state.name} desc = {this.state.desc} setDefault = {this.setToDefault} />

            </div>
        )
    }
}