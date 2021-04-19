
function Container({children}) {
    return (
        <>
            <div className="container">
                {children}
            </div>
            <style jsx>{`

                .container {
                    max-width: 1200px;
                    margin: 0 50px;
                }

            `}
            </style>
        </>
    )
}

export default Container