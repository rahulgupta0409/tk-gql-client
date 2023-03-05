import React from 'react'

export default function Patient() {
  return (
    <>
        <form className='row'>
        <div class="col">
         <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div class="col">
         <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
        </div>
        </form>
    </>
  )
}
