import { productType } from "@/types/productType";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./ui/card";
import { Button } from "./ui/button";

type ProductProps = {
    product: productType,
}

export default function Product( { product } : ProductProps){
    return (
        <Card className="flex flex-col shadow-lg h-96 w-60 bg-slate-800 p-5 text-gray-300">
            <CardTitle className="relative max-h-72 flex-1">IMG</CardTitle>
            <CardContent className="flex justify-between font-bold my-3">{product.title}</CardContent>
            <Button className="bg-teal-600 text-white p-5">Adicionar ao carrinho</Button>
        </Card>
    )
}