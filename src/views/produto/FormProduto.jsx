
import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormCliente() {
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    function salvar() {

		let produtoRequest = {
            titulo: titulo,
		     descricao: descricao,
		     valorUnitario: valorUnitario,
		     tempoEntregaMinimo: tempoEntregaMinimo,
		     tempoEntregaMaximo: tempoEntregaMaximo
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um produto.')
		})
	}


    return (

        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                
                                    required
                                    fluid
                                    label='Descrição'>
                                    <InputMask
                                        
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />
                                
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor do Produto'
                                    
                                    >
                                    <InputMask
                                        
                                        value={valorUnitario}
                                        onChange={e => setValorUnitario(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Minimo'
                                    >
                                    <InputMask
                                        
                                        value={tempoEntregaMinimo}
                                        onChange={e => setTempoEntregaMinimo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Maximo'
                                    
                                >
                                    <InputMask
                                       
                                        maskChar={null}
                                        
                                        value={tempoEntregaMaximo}
                                        onChange={e => setTempoEntregaMaximo(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/home'}>Voltar</Link>

                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>


                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}