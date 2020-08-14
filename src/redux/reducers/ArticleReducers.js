import { saveChange, deleteArticle, loadArticle,createArticle } from '../../services/ArticleApi'
const initialState = {
    user: {
        email :"",
        password:"",
        id: 0
    },
    title: "",
    content: "",
    user_id_article: 0,
    id_article: "",
    articles: []
}
const reducer = (state = initialState, action) => {
    console.log(state.user.email)
    console.log(state.user.password)
    switch (action.type) {
        case "GETARTICLES":
            return { ...state, articles: action.data };
        case "EDITARTICLE":
            return {
                ...state,
                title: action.data.title,
                content: action.data.content,
                user_id_article: action.data.user_id_article,
                id_article: action.data.id_article,
            }
        case "HANDLECHANGE":
            return {
                ...state,
                [action.data.name]: action.data.value
            }
            case "HANDLECHANGEUSER":
                return {
                    ...state,
                    user : {
                        ...state.user,
                        [action.data.name]: action.data.value
                    }
                }
        case "SAVECHANGE":
            saveChange({
                title: state.title,
                content: state.content,
                user_id_article: state.user_id_article,
                id_article: state.id_article,
            })
        case "DELETEARTICLE":
            deleteArticle(action.data)
        case "LOGIN":
            return {
                ...state,
                user: {
                    id: action.data
                }
            }
        case "LOADARTICLE":
            loadArticle(state.user.id).then(res => {
                return {
                    ...state,
                    articles: res
                }
            })
        case "CREATEARTICLE":
            createArticle(action.data.id,action.data.article)
        default:
            return state
       
    }
}

export { reducer }