import { Badge } from "@/components/ui/badge"
import books from  '../index.jsx'

function ShoppingBookTile({books})
{
    return(
                <Card className="w-full max-w-sm mx-auto">
                 <div>
                    <div className="relative">
                        <img src={books?.image}
                        className="w-dull h-[300px] object-cover rounded-t-lg"/>
                       {
                          books?.price>0 ?(
                       <Badge className='absolute top-2 left-2 bg-red-500 hover:bg-red-600'>buy</Badge>):null
                       }

                    </div>

                    <CardContent className='p-4'>
                        <h2 className="text-xl font-bold mb-2">{books?.name}</h2>
                        <div> </div>
                        </CardContent>
                </div>         
                </Card>
    );
}
export default ShoppingBookTile;



