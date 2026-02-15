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
            <h2>{title}</h2>
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

function CaptionedImage({ title = '', image = '', alt = '', caption = '' }) {
    return <div className=''>
        <div className='flex flex-col flex-center captioned-image'>
            <img
                src={image}
                alt={alt}
                className='image' />
            <h5>{caption}</h5>
        </div>
    </div>
}

function BulletList({ title, items = [] }) {
    return <div>
       
        {title ? <h3>{title}</h3> : null }
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
    BulletList,
}