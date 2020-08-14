import swal from 'sweetalert'
const createArticleSuccess = () => {
     swal("Good job!", "Create new article success !", "success");
}
const createArticleFail = () => {
    swal("Oops...!", "Create new article failed !", "error");
}


export { createArticleSuccess , createArticleFail }