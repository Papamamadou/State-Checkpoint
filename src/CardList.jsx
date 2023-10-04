import Card from "./Card";


function CardList({data}){
    return (
        <>
            {
                data.map((item)=>{
                    return <Card key={item.id} {...item}/>
                })
            }
        </>
    )
}
export default CardList