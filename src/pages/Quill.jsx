import Container from 'quill/blots/container';
import Toolbar from 'quill/modules/toolbar';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
export default function Quill() {
    const [value, setValue] = useState('');
    const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};
    return (
        <>
            <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} />;
        </>
    )
}