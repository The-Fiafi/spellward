import { useState } from "react";

import "./MediaButton.scss";

interface PropType {
    targetColor: string,
    baseColor?: string,
    MediaSvg: React.FC<React.SVGProps<SVGSVGElement>>,
    children: React.ReactNode
}


export default function MediaButton({ targetColor, baseColor = "#FFF", MediaSvg, children }: PropType) {
    const [svgColor, setSvgColor] = useState<string>(baseColor);
    
    const onMouseEnterHandler = () => setSvgColor(targetColor);;
    const onMouseLeaveHandler = () => setSvgColor(baseColor);

    return (
        <div
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            className="media-button-container"
        >
            <div className="media-button-svg-container">
                <MediaSvg
                    fill={svgColor}
                    stroke={svgColor}
                    
                />
            </div>

            <h2
                className="media-button-info-text card-subheader"
                style={{ color: `${svgColor}` }}
            >
                {children}
            </h2>
        </div>
    );
}