import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function TechStackInline({ items = [] }) {
    return (
        <div className="tech-stack-inline flex">
            {items.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
};

function TextSection({ title, paragraphs = [], children }) {
    return (
        <section>
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
        <dl className="full-width">
            {items.map((item, index) => {
                const Icon = item.icon
                return (
                    <div key={index} className="soft-list-row" style={{ '--accent': '#c51a4a' }}>
                        <dt className="flex flex-center">
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

function CaptionedImage({ image = '', alt = '', caption = '', imageSizeClass = 'medium-image' }) {
    const imageStyle = "image " + imageSizeClass
    return <div className='flex flex-col flex-center captioned-image'>
        <img src={image} alt={alt} className={imageStyle} />
        <h5>{caption}</h5>
    </div>
}

function CaptionedImages({ imageList, imageSizeClass = 'medium-image' }) {
    const [index, setIndex] = useState(0);
    let image = imageList[index % imageList.length];
    const imageStyle = "image " + imageSizeClass

    return <div className="flex flex-col flex-center captioned-image">
        <div className="gap flex flex-start justify-center">
            <img src={image.src} alt={image.alt} className={imageStyle} />
            <ThemeButtons
                colors={[
                    { primary: "white", secondary: "#2b2b2b" },
                    { primary: "#ec8e81", secondary: "#53a8cd" }
                ]} selectedIndex={index} onSelectIndex={setIndex}
            />
        </div>
        <h5>{image.caption}</h5>
    </div>
}

function ThemeButtons({ colors, selectedIndex, onSelectIndex }) {
    return (
        <div className="flex flex-col flex-center card theme-buttons">
            {colors.map((color, i) => (
                <button key={i}
                    className={`theme-dot ${selectedIndex === i ? 'selected' : ''}`}
                    style={{ '--dot-bg': color.secondary ? `linear-gradient(135deg, ${color.primary} 50%, ${color.secondary} 50%)` : color.primary }}
                    onClick={() => onSelectIndex(i)}
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

function CodeSnippet({ title, code, language = "php", style = atomDark }) {
    return (
        <div className="code-snippet-border">
            <p style={{ margin: "0.6em 0em 0.6em 0.8em", fontSize: "1.2em", fontWeight: "250" }}>{title}</p>
            <div className=''>
                <SyntaxHighlighter language={language} style={style} codeTagProps={{ style: { whiteSpace: 'pre-wrap' } }} customStyle={{ margin: 0, borderRadius: "0%" }} className='code-snippet' >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export {
    TechStackInline,
    TextSection,
    SoftList,
    CaptionedImage,
    CaptionedImages,
    BulletList,
    CodeSnippet
}