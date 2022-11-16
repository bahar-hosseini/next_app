import { useState } from 'react';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', body: '' });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch('http://localhost:3000/api/posts/create', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    res = await res.json();
    console.log(res);
  };
  return (
    <>
      <h1>Create Post</h1>
      <style jsx>
        {`
          label {
            display: block;
          }
        `}
      </style>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={form.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            type='text'
            name='body'
            value={form.body}
            rows='10'
            cols='60'
            onChange={changeHandler}
          />
        </div>
        <button>Send</button>
      </form>
    </>
  );
};

export default CreatePost;
