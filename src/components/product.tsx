import { productType } from "@/types/productType";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./ui/card";
import { Button } from "./ui/button";
import ProductImage from "./productImage";
import Image from "next/image";

type ProductProps = {
    product: productType,
}

export default function Product( { product } : ProductProps){
    return (
        <Card className="flex flex-col shadow-lg h-96 w-60 p-4 bg-slate-800  text-gray-300">
            <CardTitle className="relative max-h-72 flex-1"><ProductImage product={product} fill></ProductImage></CardTitle>
            <CardContent className="flex justify-between p-0 font-bold my-3">
                    <p className="text-sm w-36 truncate">{product.title}</p>
                    <p className="text-md text-teal-300">{product.price}</p>
            </CardContent>
            <Button className="bg-teal-600 text-white p-5 mt-auto">Adicionar ao carrinho</Button>
        </Card>
    )
}