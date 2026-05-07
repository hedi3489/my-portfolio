import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
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

function TextSection({ title, subtitle, paragraphs = [], children }) {
    return (
        <section>
            {title ? <h2>{title}</h2> : null}
            {subtitle ? <h3>{subtitle}</h3> : null}
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

function CaptionedImage({ imageList, image, alt, caption, imageSizeClass = 'image-width-65', colorList = null, imageDetails = null, buttonStyle = null, dotSize, controlsAccent = false }) {
    const isSingle = !imageList || imageList.length === 1;
    const list = imageList ?? [{ src: image, alt, caption }];

    const [index, setIndex] = useState(0);
    const current = list[index % list.length];
    const imageStyle = "image " + imageSizeClass + (isSingle ? '' : ' image-theme-button-offset');

    useEffect(() => {
        if (controlsAccent && colorList?.[index]) {
            document.documentElement.style.setProperty('--border-card-secondary', colorList[index].primary);
        }
    }, [index]);

    return (
        <div className="flex flex-col align-items-center text-align-center">
            <div className="gap flex align-item-flex-start justify-content-center">
                <img src={current.src} alt={current.alt} className={imageStyle} style={imageDetails} />
                {!isSingle && colorList &&
                    <ThemeButtons
                        colors={colorList}
                        selectedIndex={index}
                        onSelectIndex={setIndex}
                        buttonStyle={buttonStyle}
                        dotSize={dotSize}
                    />
                }
            </div>
            <h5>{current.caption}</h5>
        </div>
    );
}

function ThemeButtons({ colors, selectedIndex, onSelectIndex, buttonStyle = null, dotSize = "0.5rem" }) {
    return (
        <div className="flex flex-col align-items-center card theme-buttons"
            style={buttonStyle}>
            {colors.map((color, i) => (
                <button key={i}
                    className={`theme-dot ${selectedIndex === i ? 'selected' : ''}`}
                    style={{
                        fontSize: dotSize,
                        '--dot-bg': color.secondary ?
                            `linear-gradient(135deg, ${color.primary} 50%, ${color.secondary} 50%)` :
                            color.primary
                    }}
                    onClick={() => onSelectIndex(i)}
                />
            ))}
        </div>
    );
}

function BulletList({ header, intro, items = [] }) {
    return <div>

        {header ? <h3>{header}</h3> : null}
        {intro ? <p style={{ marginBottom: "0.3em" }}>{intro}</p> : null}
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}

const customAtomDark = {
    ...atomDark,
    'class-name': {
        ...atomDark['class-name'],
        color: 'rgb(218, 208, 133)'
    }
};

function CodeSnippet({ title = null, subtitle = null, code, language = "php", style = customAtomDark }) {
    return (
        <div className="code-snippet-border">
            {title ? <p style={{ margin: "0.5em 0em 0.6em 0.8em", fontSize: "1.2em", fontWeight: "250" }}>{title}</p> : null}
            {subtitle ? <p style={{ margin: "0.5em 0em 0em 0.8em", fontSize: "1.2em", color: "gray" }}>{subtitle}</p> : null}
            <div className=''>
                <SyntaxHighlighter language={language} style={style} codeTagProps={{ style: { whiteSpace: 'pre-wrap' } }}
                    customStyle={{
                        margin: 0,
                        borderRadius: "0%",
                    }} className='code-snippet' >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}


const getScaleColor = (value) => {
    const num = parseFloat(value);
    if (num >= 9 || value === "Most Urgent") return { fontWeight: "400", backgroundColor: "#111111", };
    if (num >= 7 || value === "Very Urgent") return { fontWeight: "400", backgroundColor: "#6c0101" };
    if (num >= 5 || value === "Urgent") return { fontWeight: "400", backgroundColor: "#8a4601" };
    if (num >= 4 || value === "Less Urgent") return { fontWeight: "400", backgroundColor: "#997a00" };
    return { backgroundColor: "#2e6b2e", color: "white" };
};

const Table = ({ columns, rows, center = [], widths = [], colorScale = [] }) => (
    <table style={{ tableLayout: "fixed", width: "100%" }}>
        <thead>
            <tr>
                {columns.map((col, i) => (
                    <th key={i} style={{
                        textAlign: center.includes(i) ? "center" : "left",
                        width: widths[i] ?? "auto"
                    }}>{col}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, i) => (
                <tr key={i}>
                    {row.map((cell, j) => (
                        <td key={j} style={{
                            textAlign: center.includes(j) ? "center" : "left",
                            ...(colorScale.includes(j) ? getScaleColor(cell) : {})
                        }}>{cell}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

function JourneySection({ logo, place, program, date, body }) {
    var headerHeight = '5rem';
    if (place == null) { headerHeight = '3.1rem'; }

    return <div className='flex flex-col journey-section' style={{ gap: '0.7em' }}>
        <div className='gap flex' style={{ height: headerHeight }}>
            {logo ? <img src={logo} style={{ borderRadius: '10px' }} /> : null}
            <div className='width-100'>
                {place ? <h2 style={{ margin: '0', lineHeight: '1', fontWeight: '600' }}>{place}</h2> : null}
                <p style={{ margin: '0', fontWeight: '400' }}>{program}</p>
                <p style={{ margin: '0', color: '#989898', fontSize: "1.1rem" }}>{date}</p>
            </div>
        </div>
        <p style={{ lineHeight: '1.6' }}>{body}</p>
    </div>
}

export {
    TechStackInline,
    TextSection,
    SoftList,
    CaptionedImage,
    BulletList,
    CodeSnippet,
    ThemeButtons,
    Table,
    JourneySection
}