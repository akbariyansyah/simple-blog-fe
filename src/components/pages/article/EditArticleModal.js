import React from 'react'
import EditArticleForm from './EditArticleForm'

function EditArticleModal({ title, content, handleChange, saveChange }) {
    let button;
    if (title === "" || content === "") {
        button = <button type="button" class="btn btn-secondary" data-dismiss="modal" disabled>Save changes</button>
    } else {
        button = <button type="button" class="btn btn-success" onClick={saveChange} data-dismiss="modal">Save changes</button>
    }
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" style={{ color: "black" }}>
            <div class="modal-dialog" role="document" style={{"maxWidth" : 1100}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" >Edit Article</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <EditArticleForm title={title} content={content} handleChange={handleChange} />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        {button}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EditArticleModal
