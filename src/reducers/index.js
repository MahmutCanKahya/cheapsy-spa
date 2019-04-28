import { ADD_USER ,SHOW_ADVERTS} from '../constants'

const user = (action)=>{
    return{
        name:action.name,
        lastname:action.lastname,
        email:action.email,
        username:action.username,
        password:action.password,
    }
}

const users = (state = [],action)=>{
    let users = null;
    switch (action.type) {
        case ADD_USER:
            console.log("yeni görev eklendi ", users)
            users =[...state,user(action)];
            return users;
        default:
            return state;
    }
}

const advert =(action)=>{
    return{
        _id:action._id,
        ilan_adi:action.ilan_adi,
        fiyat:action.fiyat,
        ilan_url:action.ilan_url,
        ilan_tarihi:action.ilan_tarihi,
    }
}

const adverts = (state = [] , action)=>{
    let adverts =null;
    switch (action.type) {
        case SHOW_ADVERTS:
            console.log("yeni görev eklendi");
            adverts =[...state,advert(action)]
            return advert;
    
        default:
            return state;
    }
}

export default users;