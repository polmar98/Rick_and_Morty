import Card from '../Card/Card';
import CardSmall from '../Card/CardSmall';

export default function Cards({characters, onClose, estado}) {
    if(estado==1){
        return(
            <div>
                {characters.map(prop =>
                    <Card
                        key={prop.id}
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
    } else {
        return(
            <div>
                {characters.map(prop =>
                    <CardSmall
                        key={prop.id}
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


}

