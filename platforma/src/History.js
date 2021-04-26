import './index.css';

function History() {
    return (
        <div className="history">
            <form action="" className="table__sort">
                <label>Sortare după:</label>
                <select className="table__sort__select">
                    <option>Id</option>
                    <option>Nume expeditor</option>
                    <option>Nume destinatar</option>
                    <option>Data cererii</option>
                    <option>Data plecării curierului</option>
                    <option>Data livrării</option>
                    <option>Tip echipament</option>
                    <option>Cantitate</option>
                    <option>Nume curier</option>
                </select>
                <select className="table__sort__select">
                    <option>Ascendent</option>
                    <option>Descendent</option>
                </select>
            </form>
            <table className="table">
                <thead class="table__header">
                    <tr>
                        <th>Id</th>
                        <th>Expeditor</th>
                        <th>Destinatar</th>
                        <th>Data cererii</th>
                        <th>Data plecării curierului</th>
                        <th>Data livrării</th>
                        <th>Tip echipament</th>
                        <th>Cantitate</th>
                        <th>Nume curier</th>
                    </tr>
                </thead>
                <tbody class="table__body">
                    <tr>
                        <td>12</td>
                        <td>Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Pansament</td>
                        <td>477</td>
                        <td>Silviu Petrescu</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Măști</td>
                        <td>4860</td>
                        <td>Ancuța Nicolescu</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași</td>
                        <td>Spitalul Municipal de Urgență Roman</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Sticle Dezinfectant</td>
                        <td>968</td>
                        <td>Carmen Funar</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Spitalul Municipal de Urgență Roman</td>
                        <td>Spitalul Clinic de Urgență pentru Copii „Sf. Maria” Iași</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Pansament</td>
                        <td>5090</td>
                        <td>Andrei Vasile</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Spitalul Clinic de Urgență pentru Copii „Sf. Maria” Iași</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Pansament</td>
                        <td>477</td>
                        <td>Gabriel Iliescu</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Sticle Dezinfectant</td>
                        <td>4860</td>
                        <td>Lidia Antonescu</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>Spitalul Clinic Județean de Urgență Cluj</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Măști</td>
                        <td>968</td>
                        <td>Corneliu Funar</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>Spitalul Clinic de Urgență București</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Măști</td>
                        <td>4271</td>
                        <td>Victoria Constantinescu</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Spitalul Clinic de Urgență pentru Copii „Sf. Maria” Iași</td>
                        <td>Spitalul Clinic Municipal Cluj-Napoca</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Pansament</td>
                        <td>477</td>
                        <td>Velma Griffin</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Spitalul Municipal de Urgență Roman</td>
                        <td>Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Măști</td>
                        <td>4860</td>
                        <td>Lee Levy</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Spitalul Clinic Județean de Urgență Cluj</td>
                        <td>Spitalul Municipal de Urgență Roman</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Sticle Dezinfectant</td>
                        <td>968</td>
                        <td>Seth Owens</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Spitalul Clinic Județean de Urgență Cluj</td>
                        <td>Spitalul Clinic de Urgență pentru Copii „Sf. Maria” Iași</td>
                        <td>24.04.2021</td>
                        <td>25.04.2021</td>
                        <td>26.04.2021</td>
                        <td>Măști</td>
                        <td>5090</td>
                        <td>Leroy Carter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default History;
