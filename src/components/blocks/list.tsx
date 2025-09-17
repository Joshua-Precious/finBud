import type { ReactNode } from "react";
import { ChartNoAxesColumnIncreasing, Users, TrendingDown, PiggyBank, Activity } from 'lucide-react';


export default function List() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <Card title="Spent this month" value="$682.5" image2={<ChartNoAxesColumnIncreasing  color="#476b57"/>} />
                <Card title="New clients" value="321" image1={<Users color="#476b57"/>} image2={<TrendingDown color="#476b57"/>} imageBackgroundColor="#e8efea"/>
                <Card title="Earnings" value="$350.40" image1={<PiggyBank color="#8B4513" />} imageBackgroundColor="#f2e9d8" />
                <Card title="Activity" value="540.50" image2={<Activity />} backgroundColor={["#839f8f","#587665"]} color="text-white"/>
            </div>

        </div>
    );
}

type Card = {
    title: string;
    value: string | number
    image1?: ReactNode;
    image2?: ReactNode;
    backgroundColor?: string[];
    imageBackgroundColor?: string;
    color?: string;
}

const Card = ({title, value, image1, image2, backgroundColor, imageBackgroundColor, color} : Card) => (
    <div className={`bg-base-100 p-3 rounded-lg flex items-center space-x-4 ${color}`}
    style={
        backgroundColor ? { background: `linear-gradient(45deg, ${backgroundColor[0]}, ${backgroundColor[1]})` } : {}
    }>
        {image1 && (
            <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: imageBackgroundColor || '#e5e7eb' }}
            >
                {image1}
            </div>
        )}

        <div className="flex-1">
            <p className="opacity-60 font-medium text-sm">{title}</p>
            <h5 className="text-lg font-bold">{value}</h5>
        </div>
            {image2 && image2}
        
    </div>
);