import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Cadastrar extends Component {
    state = {
        title: "",
        description: "",
        url: ""
    }
    onChange = evt =>{
        var value = evt.target.value
        var key = evt.target.name
        this.setState(old => ({
            ...old,
            [key]: value
        }))
    }
    send = async () =>{
        if(this.state.title === "" || this.state.description === "" || this.state.url === ""){
            alert("Preencha todos os campos obrigatórios marcados com: '*'")
        }
        await api.post("/products", this.state)

        this.props.history.push('/')
    }
    render() {
        const { title, description, url } = this.state
       
        
        return(
            <div className="form">
                <h1>Cadastrar</h1>
                <div>
                    <p>* Título</p>
                    <input name="title" value={title} onChange={this.onChange} type="text"></input>
                    <p>* Descrição</p>
                    <input name="description" value={description} onChange={this.onChange} type="text"></input>
                    <p>* URL</p>
                    <input name="url" value={url} onChange={this.onChange} type="text"></input>
                    <button onClick={this.send}>Enviar</button>
                </div>
                
            </div>
        )
    }
}