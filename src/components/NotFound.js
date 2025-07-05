import React from 'react';

const NotFound = () => {
    return (
        <div className="text-center my-5">
            <div className="alert alert-warning shadow rounded-4 p-4 fw-bold fs-5 text-secondary">
                <i className="bi bi-exclamation-circle-fill me-2 text-danger"></i>
                No Tasks Found.
            </div>
        </div>
    );
}

export default NotFound;
