
function Container({children}) {
    return (
        <>
            <div className="container">
                {children}
            </div>
            <style jsx>{`

                .container {
                    max-width: 1200px;
                    margin: auto;
                }

            `}
            </style>
        </>
    )
}

export default Container