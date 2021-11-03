import Image from 'react-bootstrap/Image';

// presentational component for 404 page
function PageNotFound () {
    return (
        <section className="error-page">
            <h1> 404 Error </h1>
            <p>Page not found. You're in outerspace.</p>
            <Image className="space-image" src="https://source.unsplash.com/Yj1M5riCKk4" fluid />
        </section>
    )
};

export default PageNotFound;