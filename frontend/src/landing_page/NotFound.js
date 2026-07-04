import React from 'react'

function NotFound() {
    return ( 
        <div className='container text-center mt-5 p-3'>
            <h1 className='mb-3'>404 Page Not Found</h1>
            <p className='text-muted'>Sorry, the page you are looking for does not exist!</p>
            <button type="button" class="btn btn-primary">Go to Home page</button>
        </div>
     );
}

export default NotFound;