export default async function Docs({
    params,
}:{
    params:Promise<{slug:string[]}>;
}){
    const {slug} = params.slug??[];
    console.log(slug)
    if(slug.length===2){
        return (
            <h1>
                viewing docs for feature {slug[0]} and product {slug[1]}
            </h1>
        );
    }
    else if(slug.length===1){
        return (
            <h1>
                viewing docs for feature {slug[0]}
            </h1>
        );
    }
    return <h1>
        Docs home page
    </h1>
}