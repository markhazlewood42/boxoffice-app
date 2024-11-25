const ShowCard = ({ id, name, image, summary, isStarred, onStarMeClick }) => {
   // Show the first ten words of the summary, stripping out HTML
   const strippedSummary = summary
      ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
      : 'No summary';

   return (
      <div>
         <div>
            <img src={image} alt={name} />
         </div>

         <h1>{name}</h1>
         <p>{strippedSummary}</p>

         <div>
            <a href={`/show/${id}`} target='_blank' rel='noreferrer'>
               Read more
            </a>
            <button type="button" onClick={() => onStarMeClick(id)}>
               {
                  isStarred ? 'Unstar me' : 'Star me'
               }
            </button>
         </div>
      </div>
   );
};

export default ShowCard;
