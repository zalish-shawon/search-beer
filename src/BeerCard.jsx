
const BeerCard = ({ beer }) => {
    return (
        <div>
            <div className="card h-[500px]  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={beer.image_url} alt="Shoes" className="rounded-xl h-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeerCard;