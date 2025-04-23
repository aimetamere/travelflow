import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-favorites.svg"
                height={80}
                width={80}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favorites found!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Add a board to your favorites to see it here 
            </p>
        </div>
    );
};