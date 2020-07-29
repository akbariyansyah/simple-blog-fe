import axios from "axios";
import swal from "sweetalert";


const loadArticle = (id, page, limit, keyword = "%%") => {
    let baseUrl = `/article/${id}?page=${page}&limit=${limit}&keyword=${keyword}`
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
    axios.post(`/article/${id}`, article)
        .then(res => {
            console.log(res)
            const response = res.data.code
            if (response === 200) {
                swal("Good job!", "Create new article success !", "success");
            } else {
                swal("Oops...!", "Create new article failed !", "error");
            }
        })
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

    return axios.put("/article", article)
        .then(res => {
            return res
        })
        .catch(err => console.log(err))



}
const deleteArticle = (id, page, limit) => {
    let baseUrl = `/article/${id}?page=${page}&limit=${limit}`
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