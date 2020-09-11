import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Cadastrar extends Component {
    state = {
        title: "",
        description: "",
        url: ""
    }
    componentDidMount(){
        window.document.getElementById('titulo').focus()
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
            if(this.state.title===""){
                window.document.getElementById('titulo').focus()
            } else
            if(this.state.description===""){
                window.document.getElementById('descricao').focus()
            }else{
                window.document.getElementById('url').focus()
            }
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
                    <input placeholder="Título" name="title" value={title} onChange={this.onChange} type="text" id="titulo"></input>
                    <p>* Descrição</p>
                    <input placeholder="Descrição" name="description" value={description} onChange={this.onChange} type="text" id="descricao"></input>
                    <p>* URL</p>
                    <input placeholder="URL" name="url" value={url} onChange={this.onChange} type="text" id="url"></input>
                    <button onClick={this.send}>Enviar</button>
                </div>
                
            </div>
        )
    }
}