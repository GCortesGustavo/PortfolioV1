

const Navbar = () => {
    return (
        <div className="flex bg-primary flex-row">
            <div>
                <p>Imagen</p>
            </div>
            <div className="flex flex-row space-beetween">
                <h1 className="m-7">Sobre mí</h1>
                <h1 className="m-7">Proyectos</h1>
                <h1 className="m-7">Skills</h1>
                <h1 className="m-7">Educación</h1>
                <h1 className="m-7">Contacto</h1>
            </div>
            <div>
                <p>Botones</p>
            </div>
        </div>
    )
}

export default Navbar;