import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class edit extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        url: ""
    }

    async componentDidMount(){
        document.getElementById('comp1').style.visibility="hidden"
        const { id } = this.props.match.params

        const response =  await api.get(`/products/${id}`)

        this.setState({ 
            id: response.data._id,
            title: response.data.title, 
            description: response.data.description,
            url: response.data.url
         })
        document.getElementById('loadingSpin').style.display="none"
        document.getElementById('comp1').style.visibility="visible"
        window.document.getElementById('titulo').focus()
    }
    
    
    render(){
        const { id, title, description, url } = this.state
        const onChange = evt => {
            const key = evt.target.name
            const value =  evt.target.value
            this.setState({
                [key]: value
            })
        }
        const send = async () => {
            if(this.state.title === "" || this.state.description === "" || this.state.url === ""){
                alert("Preencha todos os campos obrigatórios marcados com: '*'")
            } else{
                await api.put(`/products/${id}`, this.state)

                this.props.history.push('/')
            }
        }
        
        return(
            <div>
                <h1>Editar</h1>
                <p id="loadingSpin" className="loadingSpin"></p>
                <div id="comp1" className='form'>
                    <p>Título: *</p>
                    <input onChange={onChange} name="title"         type="text" value={title} id="titulo"></input>
                    <p>Descrição: *</p>
                    <input onChange={onChange} name="description"   type="text" value={description}></input>
                    <p>URL: *</p>
                    <input onChange={onChange} name="url"           type="text" value={url}></input>
                    <button className='edit' onClick={send} value="Atualizar">Atualizar</button>
                </div>
            </div>
        )
    }
}