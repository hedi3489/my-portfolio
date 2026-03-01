import { useState, useEffect } from "react";
import { ThemeCard } from "../components/Cards.jsx"

function TechStackInline({ items = [] }) {
    return (
        <div className="tech-stack-inline flex">
            {items.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
};

function TextSection({ title, paragraphs = [], children, className = "" }) {
    return (
        <section className={className}>
            {title ? <h2>{title}</h2> : null}
            <div>
                {paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
            </div>
            {children}
        </section>
    );
}

function SoftList({ items }) {
    return (
        <dl className="soft-list">
            {items.map((item, index) => {
                const Icon = item.icon

                return (
                    <div key={index} className="soft-list-row" style={{ '--accent': '#c51a4a' }}>
                        <dt>
                            {Icon && <Icon className="soft-list-icon" />}
                            {item.term}
                        </dt>
                        <dd>{item.description}</dd>
                    </div>
                )
            })}
        </dl>
    )
}

function CaptionedImage({ image = '', alt = '', caption = '', customWidth }) {
    return <div className=''>
        <div className='flex flex-col flex-center captioned-image'>
            <img
                src={image}
                alt={alt}
                className='image'
                style={customWidth ? { maxWidth: customWidth } : undefined}
            />
            <h5>{caption}</h5>
        </div>
    </div>
}

function CaptionedImages({ imageList }) {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }

    let image = imageList[index % imageList.length];
    return <>
        <div className="flex flex-col flex-center captioned-image">
            <div className="flex">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="image"
                />
                {/* {imageList.length > 1 ? <button onClick={handleClick} className="cycle-button">O</button> : null} */}
                <ThemeButtons />
            </div>
            <h5>{image.caption}</h5>
        </div>
    </>
}

function ThemeButtons() {
    const colors = ["#ec8e81", "#53a8cd"]
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    useEffect(() => {
        document.documentElement.style.setProperty('--border-card-secondary', selectedColor);
    }, [selectedColor]);

    return (
        <div className="flex flex-col flex-center card theme-buttons">
            {colors.map((color, i) => (
                <button
                    key={i}
                    className={`theme-dot ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select theme color ${i + 1}`}
                    onClick={() => setSelectedColor(color)}
                />
            ))}
        </div>
    );
}

function BulletList({ title, items = [] }) {
    return <div>

        {title ? <h3>{title}</h3> : null}
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}

export {
    TechStackInline,
    TextSection,
    SoftList,
    CaptionedImage,
    CaptionedImages,
    BulletList,
}