"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
                <div className="w-full h-[80vh] flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            )}
        </>
    );
};

export default LoadingScreen;
