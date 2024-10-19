function ShoppingBookTile({books})
{
    return(
                <Card className="w-full max-w-sm mx-auto">
                 <div>
                    <div className="relative">
                        <img src={books?.image}
                        className="w-dull h-[300px] object-cover rounded-t-lg"/>
                    </div>
                </div>         
                </Card>
    );
}
export default ShoppingBookTile;



