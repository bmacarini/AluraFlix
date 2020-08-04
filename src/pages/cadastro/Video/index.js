import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {

    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitle = categorias.map(({ titulo }) => titulo);
    const { handleChange, values } = useForm({
        titulo:'',
        url:'',
        categoria:''
    });

    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(e) => {
                e.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                console.log('categoriaEscolhida', categoriaEscolhida);

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Vídeo cadastrado com sucesso.');
                        history.push('/');
                    })

            }}
            >
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitle}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}