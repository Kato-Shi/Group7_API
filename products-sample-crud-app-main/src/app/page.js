import ProductsGrid from "@/components/products/ProductsGrid";

export default function Home() {
    return (
        <div
            className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-w-screen min-h-screen p-8 pb-20 gap-16 sm:p-20  mb-1 bg-black overflow-auto">
            <ProductsGrid/>
        </div>
    );
}

//items nassa center kaya pag nag ooverflow yung product nag stretch yung header which contains yung button
//so instead of items center, items start basically flexing the items acting as a margin