export default async function ProductDetails({ params }: { 
    params: { productid: string, reviewid: string};
}) {
const { productid, reviewid } = params;
    return <div>review for {reviewid} Product ID is {productid}</div>;
}
