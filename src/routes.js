import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/product'
import Cadastrar from './pages/cadastrar'
import Edit from './pages/edit'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/cadastrar" component={Cadastrar} />
            
        </Switch>
    </BrowserRouter>
)
export default Routes