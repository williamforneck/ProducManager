import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './styles.css'

export default class Product extends Component {
    state = {
        product: {}
    }

    async componentDidMount(){
        document.getElementById('comp1').style.visibility="hidden"
        document.getElementById('comp2').style.visibility="hidden"
        const { id } = this.props.match.params
        
        const response =  await api.get(`/products/${id}`)
        
        this.setState({ product: response.data })
        document.getElementById('loadingSpin').style.display="none"
        document.getElementById('comp1').style.visibility="visible"
        document.getElementById('comp2').style.visibility="visible"
    }
    render(){
        const { product } = this.state

        return(
            <div className="product-info">
            <p id="loadingSpin" className="loadingSpin"></p>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p id='comp1'>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                <Link id="comp2" to={`/edit/${product._id}`} className='edit'>Editar</Link>
            </div>
        )
    }
}