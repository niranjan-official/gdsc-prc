"use client";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <>
            {isLoading && (
                <div className="w-full h-[100vh] fixed top-0 left-0 z-50 bg-black flex justify-center items-center pb-10">
                    <div className="loader"></div>
                </div>
            )}
        </>
    );
};

export default LoadingScreen;
