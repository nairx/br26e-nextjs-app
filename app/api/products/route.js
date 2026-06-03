const products = [
    {
        id: "1",
        name: "Product 1",
        price: 1000,
        desc: "This is the description",
        imgUrl: "1.PNG",
    },
    {
        id: "2",
        name: "Product 2",
        price: 150,
        desc: "This is the description",
        imgUrl: "2.PNG",

    },
    {
        id: "3",
        name: "Product 3",
        price: 170,
        desc: "This is the description",
        imgUrl: "3.PNG",
    }
]

// import { corsHeaders } from "@/app/corsHeaders"

export async function GET() {
    return Response.json(products)
}

export async function POST(request){
    const body = await request.json()
    products.push(body)
    return Response.json(products)
}