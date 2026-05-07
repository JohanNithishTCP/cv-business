"use client";
import Offer from './_components/Offer';
import VisualLearning from './_components/VisualLearning';
import WhyChoose from './_components/WhyChoose';
import PoweredBy from './_components/PoweredBy';
import Steps from './_components/Steps';
import React from 'react';
import VisualsBanner from './_components/VisualsBanner';


export default function VisualsPage() {
    const stepsRef = React.useRef<HTMLDivElement>(null!);
    const scrollToSteps = () => {
        stepsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="bg-white flex flex-col font-sans text-gray-900">
            <VisualsBanner />
            <Steps stepsRef={stepsRef} />
            <WhyChoose whyChoose={null} />
            <VisualLearning />
            <PoweredBy />
            <Offer />
        </div>
    );
}
