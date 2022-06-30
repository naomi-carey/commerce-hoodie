import {useQuery} from 'urql';
import {GET_PRODUCT_QUERY} from '../../lib/query';
import { useRouter } from 'next/router';

export default function ProductDetails() {
//fetch slug
const {query} = useRouter();

    //fetch graphql data
    const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {slug: query.slug}
});

const {data, fetching, error} = results;
//Check for the data coming in
if(fetching) return <p>Loading....</p>
 if(error) return <p>Oh no....{error.messsage}</p>
//extract our data

const {title, description, image} = data.products.data[0].attributes;

  return (<div>
    <img src={image.data.attributes.formats.medium.url} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>

    <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>Minus</button>
    </div>
    <button>Add to cart</button>
  </div>
  
  );
}
