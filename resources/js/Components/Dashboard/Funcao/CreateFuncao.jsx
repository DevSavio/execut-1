import { useForm } from '@inertiajs/inertia-react'
import React, { useState , useEffect } from 'react';


export default function CreateFuncao({close}) {

    const {data, setData, post, reset, errors} = useForm({
        nomeFuncao: '',
        descricaoFuncao: '',
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('funcoes.store'), {
            data,
            onSuccess: () => {
                reset(),
                close()
            },
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="nomeFuncao" className="col-form-label">Nome:</label>
                            <input type="text" className="form-control" name='nomeFuncao' value={data.nomeFuncao} onChange={onChange} id="nomeFuncao"/>
                            {errors && <div className='text-danger mt-1'>{errors.nomeFuncao}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricaoFuncao" className="col-form-label">Descrição</label>
                            <input type="text" className="form-control" name='descricaoFuncao' value={data.descricaoFuncao} onChange={onChange} id="descricaoFuncao"/>
                            {errors && <div className='text-danger mt-1'>{errors.descricaoFuncao}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="submit" className="btn bg-gradient-primary">Salvar</button>
                </div>
            </form>
        </>

    )

}
