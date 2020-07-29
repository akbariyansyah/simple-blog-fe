import React from 'react'


export default function EditArticleForm(props) {
    return (
        <div>
            <form>
                    <div class="form-group">
                        <label for="title">Article Title</label>
                        <input type="text" class="form-control" name="title" value={props.title} onChange={props.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="content">Article Content</label>
                        <textarea class="form-control" name="content" rows="15" value={props.content} onChange={props.handleChange}></textarea>
                    </div>
                </form>
        </div>
    )
}

