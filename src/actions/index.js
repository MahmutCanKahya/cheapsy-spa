import { ADD_USER,DELETE_USER,SHOW_ADVERTS } from '../constants'

export const addUser = (name,lastname,email,username,password)=>{
    const action ={
        type:ADD_USER,
        name,
        lastname,
        email,
        username,
        password
    }
    console.log('action dan gelen ->', action);
    return action;
}

export const showAdverts=(_id,ilan_adi,fiyat,ilan_url,ilan_tarihi)=>{
    const action={
        type:SHOW_ADVERTS,
        _id,
        ilan_adi,
        fiyat,
        ilan_url,
        ilan_tarihi,
    }
    console.log('action dan gelen ->', action);
    return action;
}

export const deleteUser = (id) =>{
    const action ={
        type:DELETE_USER,
        id
}
    console.log('action dan gelen silinecek->', action);
    return action;
}