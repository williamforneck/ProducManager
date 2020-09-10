import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }
    componentDidMount(){ //sempre que precisar executar algo logo após o componente ser exibido em tela
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const response =  await api.get(`/products?page=${page}`)
        
        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page })
    }
    prevPage = () => {
        const { page } = this.state
    
        if (page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }
    nextPage = () => {
        const { page, productInfo } = this.state
    
        if (page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber) 
    }
    deletar = async evt => {
        const id = evt.target.id
        const article = window.document.getElementById(`${id}art`)

        article.style.marginLeft="200px"
        article.style.marginRight="-400px"
        article.style.opacity="1%"


        await api.delete(`/products/${id}`)

        this.componentDidMount()
    }

    render(){

        const { products, page, productInfo } =  this.state
        return(
            <div>
                <div>
                    <Link className="button-cadastrar" to="/cadastrar">Cadastrar</Link>
                </div>
                <div className="product-list">
                    {products.map(product => (
                        <article className='article' id={`${product._id}art`} key={product._id}>
                            <strong>{product.title}</strong> ID: {product._id}
                            <p>{product.description}</p>
                            <Link to={`/products/${product._id}`} >Acessar</Link>
                            <p className="button-delete" onClick={this.deletar} id={`${product._id}`}>Deletar</p>
                        </article>
                    ))}
                    <div className="actions">
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                    </div>
                </div>
            </div>
        )
    }
}