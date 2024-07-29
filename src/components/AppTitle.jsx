export default function AppTitle(props) {
    // Destructure title and subtitle from the props object, with some default
    // values in case they aren't provided in the component params.
    const { title="Box Office", subtitle="Are you looking for a movie or an actor?" } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};