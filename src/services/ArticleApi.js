import axios from "axios";
import swal from "sweetalert";
const loadArticle = (id, page, limit, keyword = "%%")=> {
    let baseUrl = `/article/${id}?page=${page}&limit=${limit}&keyword=${keyword}`
    console.log(baseUrl)
    return axios.get(baseUrl)
        .then(res => {
            console.log(res)
            if (res.data.data === null) {
                return null
            } else {
                return res.data.data
            }
        })
        .catch(err => console.log(err))

}
const createArticle = (id, article) => {
    return axios.post(`/article/${id}`, article)
        .then(res => res)
        .catch(function (error) {
            console.log(error);
        });
}
const saveChange = ({ title, content, id_article, user_id_article }) => {
    const article = {
        user_id_article: user_id_article,
        id_article: id_article,
        title_article: title,
        content_article: content,
    }
    axios.put("/article", article)
        .then(res => {
            swal({
                title: "Success edit article !",
                icon: "success",
            });
        })
        .catch(err => console.log(err))
}
const deleteArticle = (id) => {
    let baseUrl = `/article/${id}`
    if (id) {
        swal("Anda yakin ingin menghapus artikel ini ? ketik iya untuk menghapus", {
            content: "input",
        })
            .then((value) => {
                if (value === "iya") {
                    axios.delete(baseUrl)
                        .then(res => {
                            swal({
                                title: "Success delete article !",
                                icon: "success",
                            });


                        })
                        .catch(err => console.log(err))
                } else {
                    swal({ icon: "error" })
                }
            });
    }

}


export { saveChange, deleteArticle, loadArticle, createArticle }