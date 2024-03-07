
const SponsorCard = ({sponsor}) => {
    return (
        <div className="mt-10 mx-auto">
        <div className="card w-44 h-32 bg-gray-100 shadow-sm shadow-purple-300">
  <figure className="px-10 pt-10">
    <img src={sponsor.image} alt="Shoes" className="w-10 pb-4" />
  </figure> 
  </div>
</div>
    );
};

export default SponsorCard;