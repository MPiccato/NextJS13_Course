import Link from 'next/link'

const NavegadorLayout = ({ children }) => {
    return (
        <>
            <nav>
                <h3>Sección Tienda</h3>
                <ul>
                    <li>
                        <Link href="/tienda/categorias">Categorias</Link>
                    </li>
                    <li>
                        <Link href="/tienda/categorias/computadoras">Computadoras</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>



    );
}

export default NavegadorLayout;
