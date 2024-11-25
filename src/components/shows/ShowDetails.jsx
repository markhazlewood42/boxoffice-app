const ShowDetails = (props) => {
   const { status, premiered, network } = props;

   return (
      <div>
         <p>Status: {status}</p>

         <p>
            Premiered on {premiered} {!!network && `on ${network.name}`}
         </p>
      </div>
   );
};

export default ShowDetails;
