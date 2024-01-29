/*
const ImageUpload = ()=> {
    const [uploadImgUrl, setUploadImgUrl] = useState("");
  
    const onchangeImageUpload = (e)=> {
       const {files} = e.target;
       const uploadFile = files[0];
       const reader = new FileReader();
       reader.readAsDataURL(uploadFile);
       reader.onloadend = ()=> {
       setUploadImgUrl(reader.result);
    }
  }
    return <>
      <img src = {uploadImgUrl} img = "img"/>
      <input type = "file" accept = "image/*" onChange = {onchangeImageUpload}/>
      </>
  }
   */
import { useState } from "react";

  const Write = (props) => { 
    const [post, setPost] = useState(); 
    const [file, setFile] = useState(); 
     
    const changeValue = (e) => { 
      setPost({ 
        ...post, 
        [e.target.name]: e.target.value, 
      }); 
    }; 
     
    const saveFile = (e) => { 
      setFile(e.target.files[0]); 
    }; 
     
    const submitPost = (e) => { 
      e.preventDefault(); 
      const formData = new FormData(); 
       
      formData.append('file', file); 
      formData.append('post', JSON.stringify(post)); 
       
      fetch('http://loaclhsot:8080/post',{ 
        method: 'POST', 
        body: formData, 
      }) 
      .then(props.history.push('/')); 
    }; 
     
    return ( 
      <form onSubmit={submitPost}> 
        <input type="text" name="title" onChange={changeValue} /> 
        <input type="text" name="contents" onChange={changeValue} /> 
        <input type="file" onChange={saveFile} /> 
        <button type="submit">등록</button> 
      </form> 
    ); 
  }; 
   
  export default Write;