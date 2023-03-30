import react from "react";
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   //const { characters } = props;
    return(
        <div>
            {characters.map(prop =>
                <Card
                    id={prop.id}
                    name={prop.name}
                    species={prop.species}
                    gender={prop.gender}
                    image={prop.image}
                    onClose={onClose}
                 />
            )}
        </div>
    )

}

