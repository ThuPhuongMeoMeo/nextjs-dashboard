import React from 'react'
// import ''
export default function card() {
  return (
    <div>
        <div> This is font latin</div>
        <div className="container text-lime-400 text-ellipsis text-end w-40 mx-36 rounded-full bg-slate-600">
            This is My card
        </div>
        <h1>break berfore</h1>
        <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        </div>
        <h1>break after</h1>
        <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-column">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        <p>Look. If you think this is...</p>
        </div>
        <h1>break inside</h1>
        <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
            <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        <p>Maybe we can live without...</p>
        </div>
    </div>
  )
}
