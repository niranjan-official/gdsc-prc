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
                <div className="w-full h-[90vh] flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            )}
        </>
    );
};

export default LoadingScreen;
